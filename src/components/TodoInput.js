import React from 'react';

const TodoInput = () => {
  return(
    <div className="col-lg-12 m-t-20">
      <div className="card" style={{ width: '100%' }}>
        <div className="card-body">
          <h6 className="card-title">리스트 추가</h6>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="30자 이하로 입력해 주세요" />
            <button type="button" className="btn btn-secondary m-t-20 float-right">추가하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoInput;