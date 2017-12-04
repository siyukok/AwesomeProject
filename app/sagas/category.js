import { put, take, call, fork } from 'redux-saga/effects';
import store from 'react-native-simple-store';
import * as types from '../constants/ActionTypes';
import ToastUtil from '../utils/ToastUtil';
import RequestUtil from '../utils/RequestUtil';
import { WEXIN_ARTICLE_TYPE } from '../constants/API';
import { fetchTypeList, receiveTypeList } from '../actions/category';

export function* requestTypeList() {
    try {
        yield put(fetchTypeList());
        //call:指示middleware调用函数,并以后面的args为函数参数
        const typeList = yield call(RequestUtil.request, WEXIN_ARTICLE_TYPE, 'get');
        //put发起action到store,更改state,异步操作
        yield put(receiveTypeList(typeList.showapi_res_body.typeList));
        yield call(store.save, 'typeList', typeList.showapi_res_body.typeList);
        const errorMessage = typeList.showapi_res_error;
        if (errorMessage && errorMessage !== '') {
            yield ToastUtil.showShort(errorMessage);
        }
    } catch (error) {
        yield put(receiveTypeList([]));
        yield ToastUtil.showShort('网络发生错误，请重试');
    }
}

export function* watchRequestTypeList() {
    while (true) {
        //take创建一条 Effect 描述信息，指示 middleware 等待 Store 上指定的 action。
        // Generator 会暂停，直到一个与 pattern 匹配的 action 被发起
        yield take(types.REQUEST_TYPE_LIST);
        //指示middleware以无阻塞方式执行方法
        yield fork(requestTypeList);
    }
}