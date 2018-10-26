import React, { Component } from 'react';
import data from './data.json';
import style1 from './style.css';

class App extends Component {
    render() {
        var emplist = data.employees.map((item, index) => {
            return (
                <tr key={item.no}>
                    <td>{item.no}</td>
                    <td>{item.name}</td>
                    <td>{item.mobile}</td>
                    <td>{item.email}</td>
                </tr>
            )
        })

        return (
            <div>
                <h3>{data.title}</h3><hr/>
                <table className={style1.list}>
                    <thead>
                        <tr>
                            <th>번호</th><th>이름</th><th>모바일</th><th>이메일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {emplist}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;