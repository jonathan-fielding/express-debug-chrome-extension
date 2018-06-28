import React from 'react'

function AddSite() {
}

class Settings extends React.Component {
    render() {
        return <div>
            <h1 class="h5">Settings</h1>

            <h2 class="h6">Sites</h2>
            <p>For each website you want to be able to debug you need to configure a <strong>site authentication key</strong>.</p>

            {/* <ul>
                <li>
                    <fieldset>
                        <label>URL:</label> <input name="site-url" />
                    </fieldset>
                    <fieldset>
                        <label>Auth Key:</label> <input name="site-key" />
                    </fieldset>
                </li>
            </ul> */}

            <table>
                <thead>
                    <tr>
                        <th>Site</th>
                        <th>Key</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>http://www.jonathanfielding.com</td>
                        <td>snkdjnakjndkjndkjdasdjhsddshb</td>
                        <td><button>edit</button> <button>remove</button></td>
                    </tr>
                    <tr>
                        <td><input name="site-url" placeholder="url" /></td>
                        <td><input name="site-key" placeholder="key" /></td>
                        <td><button>save</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    }
}

export default Settings
