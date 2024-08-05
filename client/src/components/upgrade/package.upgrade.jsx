import React from 'react'
import css from "@modules/upgrade.module.css"
import  "@modules/upgrade.module.css"

export default function UpgradePackages() {
  return (
    <div>
        <div>
            <div className={`${css.flexrow}`}>
                <div></div>
                <div className='padding'>
                <span className={`small-padding ${css.notice}`}>Best value for 3 - 10 people</span>
                    <h5>Annual Premium Plan</h5>
                    <p className='large'>Subscription</p>
                    <h5>199.99/year</h5>
                    <div className='space'></div>
                    <button className='medium no-margin'>Buy now</button>
                    <div className='space'></div>
                    <a href='buy/premium'> Or buy at $9.99/month &rarr;
                    </a>
                </div>
                <div className=''>
                <div className='padding'>
                    <span className={`small-padding ${css.notice}`}>Best Church and small orgnizations</span>
                    <h5>Church Free Plan</h5>
                    <p className='large'>Subscription</p>
                    <h5>$00.00/year</h5>
                    <div className='space'></div>
                    <button className='medium no-margin secondary'>Subscribe Now</button>
                    <div className='space'></div>
                    <a href='buy/premium'> Or try 1 month free premium plan &rarr;
                    </a>
                </div>
                </div>
            </div>
            <table>
                <thead className='hide-on-sm-screen'>
                    {/* <tr>
                        <th></th>
                        <th>Premium</th>
                        <th>Freemium</th>
                    </tr> */}
                </thead>
                <tbody>
                    <tr>
                        <th scope='row' className='padding'>
                            Number of Business
                        </th>
                        {/* <div aria-hidden="true">Number of Users</div> */}
                        <td className='padding'> 3 - 10 Businesses (per Account) </td>
                        <td> 1 - 3 Businesses (per Account)</td>
                    </tr>
                    <tr>
                        <th scope='row' className='padding'>
                            Number of Users
                        </th>
                        {/* <div aria-hidden="true">Number of Users</div> */}
                        <td className='padding'> 3 - 10 People (per business) </td>
                        <td> 1 - 3 People (per business)</td>
                    </tr>
                    <tr>
                        <th scope='row' className='padding'> Number of Devices </th>
                        {/* <div aria-hidden="true">Number of Account</div> */}
                        <td>3+ Phones, 3+ PC & MACs</td>
                        <td>3 Phones, 3+ PCs and MACs</td>
                    </tr>
                    <tr>
                        <th scope='row' className='padding'> Cloud Storage </th>
                        {/* <div aria-hidden="true">Cloud Storage</div> */}
                        <td>Upto 1 TB per organization</td>
                        <td>3 GB per user</td>
                    </tr>
                    <tr>
                        <th scope='row' className='padding'> Month Financial Report </th>
                        {/* <div aria-hidden="true">Cloud Storage</div> */}
                        <td>Unlimited</td>
                        <td>2 Per month</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}
