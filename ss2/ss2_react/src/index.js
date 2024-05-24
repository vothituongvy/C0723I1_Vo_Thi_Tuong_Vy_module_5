import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// const name = "Vy";
// const fruits=['tao','chuoi','cam','nho']
const students=[
    {
        company: 'Alfreds Futterkiste',
        contact: 'Maria Anders',
        country: 'Germany'
    },{
        company: 'Centro comercial Moctezuma',
        contact: 'Francisco Chang',
        country: 'Mexico'
    },{
        company: 'Ernst Handel',
        contact: 'Roland Mendel',
        country: 'Austria'
    },{
        company: 'Island Trading',
        contact: 'Helen Bennett',
        country: 'UK'
    },{
        company: 'Laughing Bacchus Winecellars',
        contact: 'Yoshi Tannamuri',
        country: 'Canada'
    },{
        company: 'Magazzini Alimentari Riuniti',
        contact: 'Giovanni Rovelli',
        country: 'Italy'
    }
]
const root = ReactDOM.createRoot(document.getElementById('root'));
// const tick=() => {
    root.render(
        //b1
        // <h4>Browser's detail:{navigator.userAgent}</h4>
        //b2
        // <table>
        //     <caption><h1>Students</h1></caption>
        //     <thead>
        //     <tr>
        //         <th>Company</th>
        //         <th>Contact</th>
        //         <th>Country</th>
        //     </tr>
        //     </thead>
        //     <tbody>
        //     {students.map(student => (
        //         <tr>
        //             <td>{student.company}</td>
        //             <td>{student.contact}</td>
        //             <td>{student.country}</td>
        //         </tr>
        //     ))}
        //     </tbody>
        // </table>
        //b3
        // <div className="container">
        //     <div className="card">
        //         <div className="card--header" />
        //         <img
        //             className="avatar"
        //             src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        //             alt="avatar"
        //         />
        //         <div className="card--body">
        //             <div>
        //                 <p className="text-header">Ruma Khan</p>
        //                 <p className="text-sub">
        //                     Lorem Ipsum is simply dummy text of the printing and typesetting
        //                     industry
        //                 </p>
        //                 <button className="btn third">FOLLOW</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        //b4
        <div className="container d-flex align-items-center text-center">
            <div className="form-signin">
                <form>
                    <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <div className="form-floating">
                        <input type="email" className="form-control email" id="floatingInput" placeholder="Email address" />

                    </div>

                    <div className="form-floating">

                        <input type="password" className="form-control password" id="floatingPassword" placeholder="Password" />

                    </div>
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" /> Remember me
                        </label>

                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>

                </form>
            </div>
        </div>
        // <div>
        //     <h1>
        //         Hello,Vy
        //     </h1>
        //     <h2>
        //         It is {new Date().toLocaleDateString()}
        //     </h2>
        // </div>
        // <React.StrictMode>
        //   <App />
        // </React.StrictMode>
        //   React.createElement("h1", { style: { textAlign: "center" } }, name)
        //   <h1 style={{textAlign:"center"}}>{name}</h1>
        // <div>
        //     <h1>Danh sách trái cây</h1>
        //     <ul>{
        //         fruits.map((item) =>
        //             (<li>{item}
        //             </li>))
        //     }</ul>
        // </div>
    );
// };
// setInterval(tick,1000)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
