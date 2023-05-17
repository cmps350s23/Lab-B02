import styles from '../../page.module.css'
import { addAccount, updateAccount } from '@/app/actions/accounts'
import { getAccount } from '@/app/api/accounts/accounts-repo'
import { getOwners } from '@/app/api/owners/owners-repo'
import { redirect } from 'next/navigation'

export default async function Edit({ params }) {

    const owners = await getOwners()

    let account = { ownerId: '', acctType: '', balance: '' }
    const isEdit = params.accountNo != undefined && params.accountNo != 'add'
    if (isEdit) account = await getAccount(params.accountNo)

    async function handleSubmit(formData) {
        'use server'
        if (isEdit)
            await updateAccount(formData, params.accountNo)
        else await addAccount(formData)
        redirect('/')


    }
    return (
        <>
            {isEdit && <h3 className={styles.title}>Editing Account No [ {account.accountNo} ] </h3>}
            {!isEdit && <h3 className={styles.title}>Add New Account</h3>}

            <form id="account-form" className='form' action={handleSubmit}>
                <div className='form-group' >
                    <label htmlFor="ownerId" className={styles.label}>Account No</label>

                    <select class="form-control " name="ownerId" id="ownerId" required defaultValue={account.ownerId}>
                        <option disabled>Select Owner</option>
                        {owners.map(owner => <option key={owner.id} value={owner.id}>{owner.firstName} - {owner.lastName}</option>)}
                    </select>

                </div>

                <div className='form-group'>
                    <label htmlFor="acctType" className={styles.label}>Account Type</label>
                    <select class="form-control" name="acctType" id="acctType" required defaultValue={account.acctType}>
                        <option disabled>Select Account Type</option>
                        <option value="Savings">Savings</option>
                        <option value="Current">Current</option>
                    </select>
                </div>

                <div className='form-group'>
                    <label htmlFor="balance" className={styles.label}>Balance</label>
                    <input class="form-control" type="number" name="balance" id="balance" defaultValue={account.balance} />
                </div>

                <button type="Submit" className='btn btn-secondary mt-2'>Submit</button>
            </form>
        </>
    )
}
