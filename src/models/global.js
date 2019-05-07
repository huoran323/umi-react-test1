import * as api from '../services/global';

export default {
  namespace: 'global',
  state: {
    userInfo: {},
  },
  effects: {
    *getSysInfo(_, { call, put }) {
      //请求回来的返回值，有data, status
      /* {
	"data": {
		"userInfo": {
			"userName": "Laura Williams"
		    },
		"message": {
			"news": "及自处北克通到新和况名决较马队收。本子往置总铁消府时志权例分。术向多专更重入多就三合种业万市最。统京多育图万指传存相号他时拉使百。如决花阶方织导地众列花便多效做圆         国。间种间称好比三们受世里动上段。们而外及社九收正况管毛物现。打速上相道制声部内行实示十。据美极列识至称最包基切手张样圆。还强部王直反满无战信习织向文。北成局们南          家龙广资根广此达音七交结学。了你江种利特复法须定参议区小运山百。包走始她满电京克用复就实此。回式以米积合厂合那下界保最年又己以。车养也情斯行社革查影引省把                 总。制又或法马别活色响社次级深。度省六为飞这在走如民容查身将。实术利在口据感拉题利论还家。规被属干无日满公难儿间志克。总极特题速历离及厂半王天装权老己。它史明织气          学天四月在此严次。",
			"count": 19
		    }
	    },
	"status": 0
    }
    */
      const { data = {}, status } = yield call(api.getSysInfo, {});
      //status为0时,请求成功
      if (status === 0) {
        const { userInfo = {}, notification } = data;
        yield put({
          // put：发出一个 Action，类似于 dispatch,到同步方法中执行操作
          type: 'save',
          payload: {
            userInfo,
            notification,
          },
        });
      }
    },
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
