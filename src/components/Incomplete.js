import React from 'react';
import TodoItem from 'components/TodoItem';

const Incomplete = () => {
  return(
    <div className="col-lg-12 m-t-20" >
      <div className="card" style={{ width: '100%' }}>
        <div className="card-body">
          <h6 className="card-title">미완료 리스트</h6>
          <div className="form-group">
            <select className="form-control float-right" style={{ width: 150 }}>
              <option>제목순</option>
              <option>최신순</option>
            </select>
          </div>
          <div className="list-group" style={{ marginTop: 70 + 'px' }}>
            <a href="" className="list-group-item list-group-item-primary list-group-item-action">
              <div className="d-flex w-100 justify-content-">
                <h5 className="mb-1">전체선택</h5>
              </div>
            </a>
            <TodoItem type="incomplete" />
          </div>
          <div className="form-group">
            <button type="button" className="btn btn-primary m-t-20 float-right">완료하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Incomplete;