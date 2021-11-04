import React from 'react'

const Card = () => {
  return (
    <div className='col-6'>
      <div className="card">
        <img src="https://baksojwr.com/wp-content/uploads/2018/02/2-1.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Baso</h5>
          <p className="card-text text-muted">Rp15.000</p>
          <div className="input-group mb-3">
            <button className="btn btn-primary" type="button" id="buttonKurang"> - </button>
            <input type="number" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value={0} style={{textAlign: "center"}}/>
            <button className="btn btn-primary" type="button" id="buttonTambah"> + </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card