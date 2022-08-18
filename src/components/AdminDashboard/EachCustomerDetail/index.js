import React from "react"


export function EachCustomerDetail(){
    return (
        <ul className="entries-list">
            <li className="entry" id="customer-picture-name">
                <div><img src="./images/eachUser.png"></img></div>
                <p>John Doe</p>
            </li>

            <li className="entry">
                <p>John123</p>
                <p>IM-234098909</p>
            </li>

            <li className="entry">
                <p>Johndoe@ <br/>
                example.com</p>
            </li>

            <li className="entry">
                <p>5 Properties</p>
            </li>

            <li className="entry">
                <p>Jun 03, <br/>
                2022</p>
            </li>

            <li className="entry" id="edit-delete-action">
                <div><img src="./images/editAction.png"></img></div>
                <div><img src="./images/deleteAction.png"></img></div>
            </li>
    </ul>
    )
}