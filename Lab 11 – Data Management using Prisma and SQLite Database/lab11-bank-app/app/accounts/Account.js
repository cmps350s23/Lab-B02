import React from 'react'
import Link from 'next/link'

export default function Account({ account, onDelete }) {

    return (
        <tr id={'row-' + account.accountNo}>
            <td>{account.accountNo}</td>
            <td>{account.acctType}</td>
            <td>{account.balance}</td>
            <td>
                {account.balance >= 0 ? <button onClick={e => onDelete(account.accountNo)}> <i className="fas fa-trash"></i>Delete</button> : ''}
                <Link href={
                    {
                        pathname: '/accounts/edit',
                        query: account
                    }
                }> <i className="fas fa-edit"></i> Edit </Link>
            </td>
        </tr>
    )
}
