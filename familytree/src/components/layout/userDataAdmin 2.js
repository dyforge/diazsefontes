import React from 'react'

const UserDataAdmin = ({ userDat }) => {
  // debugger
  console.log('admin', userDat)
  return (
    <>
      <div className='centered-data'>
        <div className='user-info'>
          <h6>Land Information</h6>
          <div className='table'>
            <div className='tr th'>
              <div className='td'>Name</div>
              <div className='td'>Items Bought</div>
              <div className='td'>Clicked</div>
              <div className='td'>Duration</div>
              <div className='td'>Lifetime Total</div>
              <div className='td'>Total</div>
            </div>
            <div className='tr table-total'>
              <div className='td'>
                <b>Total</b>
              </div>
              <div className='td'>
                <b>4102</b>
              </div>
              <div className='td'>
                <b>2914</b>
              </div>
              <div className='td'>
                <b>1341</b>
              </div>
              <div className='td'>
                <b>$12,118,329.15</b>
              </div>
              <div className='td'>
                <b>$4,036,930.16</b>
              </div>
            </div>
            <div className='tr'>
              <div className='td'>
                <span>
                  <span>Andrew Jackman</span>
                </span>
              </div>
              <div className='td'>
                <span>41</span>
              </div>
              <div className='td'>
                <span>30</span>
              </div>
              <div className='td'>
                <span>27</span>
              </div>
              <div className='td'>
                <span>$176.15</span>
              </div>
              <div className='td'>
                <span>$14.94</span>
              </div>
            </div>
            <div className='tr'>
              <div className='td'>
                <span>
                  <span>Oliver Ogden</span>
                </span>
              </div>
              <div className='td'>
                <span>9</span>
              </div>
              <div className='td'>
                <span>3</span>
              </div>
              <div className='td'>
                <span>1</span>
              </div>
              <div className='td'>
                <span>$29,403.09</span>
              </div>
              <div className='td'>
                <span>$1,385.58</span>
              </div>
            </div>
            <div className='tr'>
              <div className='td'>
                <span>
                  <span>Basil Ullon</span>
                </span>
              </div>
              <div className='td'>
                <span>750</span>
              </div>
              <div className='td'>
                <span>535</span>
              </div>
              <div className='td'>
                <span>707</span>
              </div>
              <div className='td'>
                <span>$795,170.40</span>
              </div>
              <div className='td'>
                <span>$341,946.34</span>
              </div>
            </div>
          </div>
          <div className='btn-row'>
            <div className='table-btn'>
              <button className='addt-btn'>
                <a href='addland.html'>Add Land</a>
              </button>
            </div>
            <div className='table-btn'>
              <button className='editt-btn'>
                <a href='editland.html'>Edit Land</a>
              </button>
            </div>
            <div className='table-btn'>
              <button className='delt-btn'>
                <a href='delland.html'>Delete Land</a>
              </button>
            </div>
          </div>
        </div>
        <div className='user-info'>
          <h6>Project Information</h6>
          <div className='table'>
            <div className='tr th'>
              <div className='td'>Name</div>
              <div className='td'>Items Bought</div>
              <div className='td'>Clicked</div>
              <div className='td'>Duration</div>
              <div className='td'>Lifetime Total</div>
              <div className='td'>Total</div>
            </div>
            <div className='tr table-total'>
              <div className='td'>
                <b>Total</b>
              </div>
              <div className='td'>
                <b>4102</b>
              </div>
              <div className='td'>
                <b>2914</b>
              </div>
              <div className='td'>
                <b>1341</b>
              </div>
              <div className='td'>
                <b>$12,118,329.15</b>
              </div>
              <div className='td'>
                <b>$4,036,930.16</b>
              </div>
            </div>
            <div className='tr'>
              <div className='td'>
                <span>
                  <span>Andrew Jackman</span>
                </span>
              </div>
              <div className='td'>
                <span>41</span>
              </div>
              <div className='td'>
                <span>30</span>
              </div>
              <div className='td'>
                <span>27</span>
              </div>
              <div className='td'>
                <span>$176.15</span>
              </div>
              <div className='td'>
                <span>$14.94</span>
              </div>
            </div>
            <div className='tr'>
              <div className='td'>
                <span>
                  <span>Oliver Ogden</span>
                </span>
              </div>
              <div className='td'>
                <span>9</span>
              </div>
              <div className='td'>
                <span>3</span>
              </div>
              <div className='td'>
                <span>1</span>
              </div>
              <div className='td'>
                <span>$29,403.09</span>
              </div>
              <div className='td'>
                <span>$1,385.58</span>
              </div>
            </div>
            <div className='tr'>
              <div className='td'>
                <span>
                  <span>Basil Ullon</span>
                </span>
              </div>
              <div className='td'>
                <span>750</span>
              </div>
              <div className='td'>
                <span>535</span>
              </div>
              <div className='td'>
                <span>707</span>
              </div>
              <div className='td'>
                <span>$795,170.40</span>
              </div>
              <div className='td'>
                <span>$341,946.34</span>
              </div>
            </div>
          </div>
          <div className='btn-row'>
            <div className='table-btn'>
              <button className='addt-btn'>
                <a href='addproject.html'>Add Project</a>
              </button>
            </div>
            <div className='table-btn'>
              <button className='editt-btn'>
                <a href='editproject.html'>Edit Project</a>
              </button>
            </div>
            <div className='table-btn'>
              <button className='delt-btn'>
                <a href='delproject.html'>Delete Project</a>
              </button>
            </div>
          </div>
        </div>
        <div className='user-info'>
          <h6>Trail Information</h6>
          <div className='table'>
            <div className='tr th'>
              <div className='td'>Name</div>
              <div className='td'>Items Bought</div>
              <div className='td'>Clicked</div>
              <div className='td'>Duration</div>
              <div className='td'>Lifetime Total</div>
              <div className='td'>Total</div>
            </div>
            <div className='tr table-total'>
              <div className='td'>
                <b>Total</b>
              </div>
              <div className='td'>
                <b>4102</b>
              </div>
              <div className='td'>
                <b>2914</b>
              </div>
              <div className='td'>
                <b>1341</b>
              </div>
              <div className='td'>
                <b>$12,118,329.15</b>
              </div>
              <div className='td'>
                <b>$4,036,930.16</b>
              </div>
            </div>
            <div className='tr'>
              <div className='td'>
                <span>
                  <span>Andrew Jackman</span>
                </span>
              </div>
              <div className='td'>
                <span>41</span>
              </div>
              <div className='td'>
                <span>30</span>
              </div>
              <div className='td'>
                <span>27</span>
              </div>
              <div className='td'>
                <span>$176.15</span>
              </div>
              <div className='td'>
                <span>$14.94</span>
              </div>
            </div>
            <div className='tr'>
              <div className='td'>
                <span>
                  <span>Oliver Ogden</span>
                </span>
              </div>
              <div className='td'>
                <span>9</span>
              </div>
              <div className='td'>
                <span>3</span>
              </div>
              <div className='td'>
                <span>1</span>
              </div>
              <div className='td'>
                <span>$29,403.09</span>
              </div>
              <div className='td'>
                <span>$1,385.58</span>
              </div>
            </div>
            <div className='tr'>
              <div className='td'>
                <span>
                  <span>Basil Ullon</span>
                </span>
              </div>
              <div className='td'>
                <span>750</span>
              </div>
              <div className='td'>
                <span>535</span>
              </div>
              <div className='td'>
                <span>707</span>
              </div>
              <div className='td'>
                <span>$795,170.40</span>
              </div>
              <div className='td'>
                <span>$341,946.34</span>
              </div>
            </div>
          </div>
          <div className='btn-row'>
            <div className='table-btn'>
              <button className='addt-btn'>
                <a href='addtrail.html'>Add Trail</a>
              </button>
            </div>
            <div className='table-btn'>
              <button className='editt-btn'>
                <a href='edittrail.html'>Edit Trail</a>
              </button>
            </div>
            <div className='table-btn'>
              <button className='delt-btn'>
                <a href='deltrail.html'>Delete Trail</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserDataAdmin
