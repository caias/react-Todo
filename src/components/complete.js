import React from 'react';
import TodoItem from 'components/TodoItem';

const Complete = () => {
  return(
    <div className="col-lg-12 m-t-20">
      <div className="card" style={{width: '100%'}}>
        <div className="card-body">
          <h6 className="card-title">완료된 리스트</h6>
          <div className="list-group" style={{marginTop: 70 + 'px'}}>
            <a href="" className="list-group-item list-group-item-info list-group-item-action">
              <div className="d-flex w-100 justify-content-">
                <h5 className="mb-1">전체선택</h5>
              </div>
            </a>
            <TodoItem type="complete" />
          </div>
          <div className="form-group">
            <button type="button" className="btn btn-info m-t-20 float-right">복구하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Complete;