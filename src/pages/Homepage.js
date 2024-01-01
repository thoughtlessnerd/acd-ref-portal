import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <nav>
        <div className="left">
          <div className="menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="23"
              viewBox="0 0 39 23"
              fill="none"
            >
              <path
                d="M2 11.5H27.4779M2 2H37M2 21H19.5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="search">
            <input placeholder="Search"></input>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path d="M21.3599 23.4801C18.9487 25.3517 15.9148 26.2341 12.8758 25.9476C9.8369 25.6612 7.02134 24.2274 5.00227 21.9382C2.9832 19.649 1.9124 16.6764 2.00782 13.6254C2.10325 10.5745 3.35774 7.67463 5.51593 5.51606C7.6745 3.35787 10.5744 2.10338 13.6253 2.00795C16.6762 1.91252 19.6488 2.98332 21.9381 5.00239C24.2273 7.02146 25.6611 9.83703 25.9475 12.876C26.234 15.9149 25.3516 18.9488 23.4799 21.3601L29.5599 27.4401C29.7574 27.6234 29.9017 27.8566 29.9778 28.1151C30.0538 28.3736 30.0587 28.6478 29.9919 28.9089C29.9252 29.1699 29.7893 29.4081 29.5985 29.5984C29.4077 29.7887 29.1692 29.924 28.9079 29.9901C28.6472 30.0569 28.3732 30.0522 28.1149 29.9766C27.8566 29.9009 27.6234 29.757 27.4399 29.5601L21.3599 23.4801ZM22.9999 14.0001C23.0177 12.8073 22.7981 11.6228 22.354 10.5157C21.9098 9.40854 21.25 8.40076 20.4127 7.55097C19.5755 6.70118 18.5777 6.02635 17.4773 5.56574C16.3769 5.10512 15.1959 4.86791 14.0029 4.86791C12.81 4.86791 11.629 5.10512 10.5286 5.56574C9.42818 6.02635 8.43035 6.70118 7.59314 7.55097C6.75592 8.40076 6.09604 9.40854 5.65188 10.5157C5.20772 11.6228 4.98815 12.8073 5.00593 14.0001C5.04117 16.363 6.00456 18.6172 7.68799 20.2757C9.37143 21.9342 11.6398 22.8639 14.0029 22.8639C16.3661 22.8639 18.6344 21.9342 20.3179 20.2757C22.0013 18.6172 22.9647 16.363 22.9999 14.0001Z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="right">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
            >
              <path
                d="M23.75 28.5V29.6875C23.75 30.9473 23.2496 32.1555 22.3588 33.0463C21.468 33.9371 20.2598 34.4375 19 34.4375C17.7402 34.4375 16.532 33.9371 15.6412 33.0463C14.7504 32.1555 14.25 30.9473 14.25 29.6875V28.5M31.7419 26.0827C29.8359 23.75 28.4904 22.5625 28.4904 16.1314C28.4904 10.2422 25.483 8.14402 23.0078 7.125C22.679 6.98992 22.3695 6.67969 22.2693 6.34199C21.8352 4.8643 20.618 3.5625 19 3.5625C17.382 3.5625 16.1641 4.86504 15.7344 6.34348C15.6342 6.68488 15.3247 6.98992 14.9959 7.125C12.5177 8.14551 9.51336 10.2363 9.51336 16.1314C9.50965 22.5625 8.16406 23.75 6.25813 26.0827C5.46844 27.049 6.16016 28.5 7.54137 28.5H30.4661C31.8398 28.5 32.5271 27.0446 31.7419 26.0827Z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <button>
            <img src="https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg" />
          </button>
        </div>
      </nav>
      <div className="content">
        <table>
          <colgroup>
            <col style={{ width: "15%", maxWidth: "15%" }} />
            <col style={{ width: "35%", maxWidth: "35%" }} />
            <col style={{ width: "10%", maxWidth: "10%" }} />
            <col style={{ width: "10%", maxWidth: "10%" }} />
            <col style={{ width: "20%", maxWidth: "20%" }} />
            <col style={{ width: "10%", maxWidth: "10" }} />
          </colgroup>
          <thead>
            <tr>
              <th>Name</th>
              <th>Desc</th>
              <th>YOE</th>
              <th>CF</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <TableRow
              name="Abhay"
              desc="I'm a good coder"
              yoe="3"
              cf="1500"
              cfMaxRank="expert"
              cfMaxRating="1516"
              status="pending"
            />
            <TableRow
              name="Hikaku"
              desc="I'm a good coder"
              yoe="3"
              cf="1700"
              cfMaxRank="candidate-master"
              cfMaxRating="1716"
              status="pending"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

const TableRow = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.desc}</td>
      <td className="yoe">{props.yoe}yrs</td>
      <td>
        {props.cf}(<span className={props.cfMaxRank}>{props.cfMaxRating}</span>)
      </td>
      <td>
        <button className="approve">Approve</button>
        <button className="reject">Reject</button>
      </td>
      <td>{props.status}</td>
    </tr>
  );
};

export default Homepage;
