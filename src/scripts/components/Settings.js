import React from 'react'
import TableData from './TableData';

class Settings extends React.Component {
    prepareSettingsTable(rows) {
        const data = [{
            type: 'header',
            cols: [
                {
                    type: 'heading',
                    text: 'Site',
                },
                {
                    type: 'heading',
                    text: 'Access Key',
                },
                {
                    type: 'heading',
                    text: 'Edit',
                },
                {
                    type: 'heading',
                    text: 'Delete',
                },
            ]
        }];
    
        rows.forEach(row => {
            data.push({
                type: 'row',
                cols: [
                    {
                        type: 'text',
                        text: row.site,
                    },
                    {
                        type: 'text',
                        text: row.key,
                    },
                    {
                        type: 'action',
                        text: 'Edit'
                    },
                    {
                        type: 'action',
                        text: 'Delete'
                    }
                ]
            });
        });

        data.push({
            type: 'row',
            className: 'new-site-row',
            cols: [
                {
                    type: 'input',
                    name: 'site-url',
                    placeholder: 'url',
                },
                {
                    type: 'input',
                    name: 'site-key',
                    placeholder: 'key',
                },
                {
                    type: 'action',
                    text: 'Save'
                },
                {
                    type: 'action',
                    text: 'Clear'
                }
            ]
        });

        return data;
    }

    render() {
        const table = this.prepareSettingsTable([{
            site: 'https://www.jonathanfielding.com',
            key: 'snkdjnakjndkjndkjdasdjhsddshb'
        },
        {
            site: 'https://www.engadget.com',
            key: 'dakjhdkjadhkjdhajdlks'
        }]);

        return <div>
            <h1 class='h5'>Settings</h1>

            <h2 class='h6'>Sites</h2>
            <p>For each website you want to be able to debug you need to configure a <strong>site authentication key</strong>.</p>

            <TableData data={table}></TableData>
        </div>
    }
}

export default Settings
