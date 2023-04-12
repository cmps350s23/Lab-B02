import React from 'react'

export default function Account({ account }) {
    return (
        <tr>
            <td>{account.accountNo}</td>
            <td>{account.acctType}</td>
            <td>{account.balance}</td>
        </tr>
    )
}
