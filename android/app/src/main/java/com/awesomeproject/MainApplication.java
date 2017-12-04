package com.awesomeproject;

import android.app.Application;
import android.support.annotation.Nullable;

import com.awesomeproject.react.MyReactPackage;
import com.awesomeproject.react.RNBridge;
import com.awesomeproject.react.ReadingNativeModuleCallExceptionHandler;
import com.facebook.infer.annotation.Assertions;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactInstanceManagerBuilder;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {
  public static MainApplication application;
  public static ReactApplicationContext reactContext;

  //给JS发送消息
  public static void sendEvent(String eventName,@Nullable WritableMap params){
    RNBridge rnBridge = new RNBridge(reactContext);
    rnBridge.sendEvent(eventName, params);
  }

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    protected ReactInstanceManager createReactInstanceManager() {
      ReactInstanceManagerBuilder builder = ReactInstanceManager.builder()
              .setApplication(getApplication())
              .setJSMainModulePath(getJSMainModuleName())
              .setUseDeveloperSupport(getUseDeveloperSupport())
              .setRedBoxHandler(getRedBoxHandler())
              .setUIImplementationProvider(getUIImplementationProvider())
              .setInitialLifecycleState(LifecycleState.BEFORE_CREATE)
              .setNativeModuleCallExceptionHandler(
                      new ReadingNativeModuleCallExceptionHandler());

      for (ReactPackage reactPackage : getPackages()) {
        builder.addPackage(reactPackage);
      }

      String jsBundleFile = getJSBundleFile();
      if (jsBundleFile != null) {
        builder.setJSBundleFile(jsBundleFile);
      } else {
        builder.setBundleAssetName(Assertions.assertNotNull(getBundleAssetName()));
      }
      return builder.build();
    }

    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new MyReactPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    application = this;
    reactContext = new ReactApplicationContext(this);
    SoLoader.init(this, /* native exopackage */ false);
  }
}
