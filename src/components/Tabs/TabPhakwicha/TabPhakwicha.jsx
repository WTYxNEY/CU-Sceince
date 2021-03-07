import React, { useState } from 'react'
import './TabPhakwicha.css'
import TablePhakwicha from '../../Table/TablePhakwicha/TablePhakwicha'
import { AiOutlineSearch } from 'react-icons/ai';
import Footer from '../../Footer/Footer'

export default function TabPhakwicha() {
  let newDate = new Date();
  const [toggleState, setToggleState] = useState(1);
  const [search, setSearch] = useState('');
  const [year, setYear] = useState(newDate.getFullYear()+543)

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const yearHandler = (e) => {
    setYear(e.target.value)
  }

  // const searchHandle = portfolio.filter(portfolio => {
  //   return portfolio.title.toLowerCase().includes(search.toLowerCase())
  // }){

  //     searchHandle.map((portfolio) => {
  //       return <div className="blogs-content-card-item">
  //           <CardItem key={portfolio._id} portfolio={portfolio} />
  //       </div>
  //   })
  // }

  const tempDepart = ["คณิตศาสตร์", "วิทยาศาสตร์คอมพิวเตอร์", "วิทยาการคอมพิวเตอร์และเทคโนโลยีสารสนเทศ"]

  const renderYears = () => {
    let currentYear = newDate.getFullYear();
    let selectedYear = (currentYear + 543) - 4;

    let about10years = [];
    let num = 10;
    for (let index = 0; index <= num; index++) {
      if (index !== 0) {
        selectedYear += 1
      }

      about10years.push(selectedYear)
    }
    return (
      <>
        <div className="years">
          <p style={{fontSize: '18px'}}>ปีงบประมาณ &nbsp;</p>

          <select onChange={(e) => yearHandler(e)} defaultValue={year}>
            {about10years.map((year) => {
              return (
                <option value={year}>{year}</option>
              )
            })}

          </select>
        </div>

        <div className="inputWithIcon">
          <input
            type="text"
            name="search"
            id="search"
            value={search}
            placeholder=" ค้นหา"
            onChange={e => setSearch(e.target.value)} />
          <i><AiOutlineSearch /></i>
        </div>
      </>
    )
  };

  const renderDepartment = () => {
    return (
      <>
        <div className="department">
          <p style={{fontSize: '18px'}}>ชื่อภาควิชา</p>

          <select >
            {tempDepart.map((dept) => {
              return (
                <option value={dept}>{dept}</option>
              )
            })}

          </select>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="tab-flex">
        <div className="tab-container">

          <div className="tab-bloc-tabs">
            <button
              className={toggleState === 1 ? "tab-active-tabs" : "tab-tabs"}
              onClick={() => toggleTab(1)}
            >
              <h4>ภาควิชา</h4>
            </button>
            <button
              className={toggleState === 2 ? "tab-active-tabs" : "tab-tabs"}
              onClick={() => toggleTab(2)}
            >
              <h4>หลักสูตร</h4>
            </button>
          </div>

          <div className="tab-content-tabs">

            <div className={toggleState === 1 ? "tab-active-content" : "tab-content"}>

              <div className="tab-years-search">
                {renderYears()}
              </div>
              <div className="tab-table">
                <TablePhakwicha page={window.location.pathname} currentTab={toggleState} year={year}  />
              </div>

            </div>

            <div className={toggleState === 2 ? "tab-active-content" : "tab-content"}>

              <div className="tab-years-search">
                {renderYears()}
              </div>
              <div className="tab-department">
                {renderDepartment()}
              </div>
              <div className="tab-table">
                <TablePhakwicha page={window.location.pathname} currentTab={toggleState} year={year} />
              </div>
            </div>

          </div>
        </div>

        <div className="footer">
          <Footer page={window.location.pathname} currentTab={toggleState} year={year} />
        </div>
      </div>
    </>
  );
}
