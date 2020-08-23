// @ts-ignore
import React from 'react';
import { Toast } from 'antd-mobile';
import router from 'umi/router';
import { login } from '@/services/api';




interface IProps {
  dispatch: any;
  result: {
    gender: number;
    score: number;
  };
}

class Result extends React.PureComponent<IProps> {
  constructor(props) {
    super(props);
    this.state = {
      resultSrc: ''
    };
  }

  public componentDidMount(): void {
    login({
      username: '1666666',
      password: 'Admin000!'
    }).then(res => {

    }).catch(err => {
      console.log(err)
    })
  }


  public render() {
    // const { mainDom, resultSrc } = this.state;
    // @ts-ignore
    // const { title, src, imgSrc, desc, msg, mapData: { mapSrc, time, distance } } = this.getResultData();
    return (
      <React.Fragment>
        <div>
          <button>点击</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Result;
