import React from 'react'

function AddSite() {
}

class Settings extends React.Component {
    render() {
        return <div>
            <h1>Settings</h1>

            <h2>Sites</h2>
            <p>For each website you want to be able to debug you need to configure a <strong>site authentication key</strong>.</p>

            <ul>
                <li>
                    <fieldset>
                        <label>URL:</label> <input name="site-url" />
                    </fieldset>
                    <fieldset>
                        <label>Auth Key:</label> <input name="site-key" />
                    </fieldset>
                </li>
            </ul>

            <button onClick={AddSite}>Add Site</button>
        </div>
    }
}

export default Settings
