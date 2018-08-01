import React from 'react';
import { connect } from 'react-redux';
import TableData from '../components/TableData';
import NewSiteForm from '../components/NewSiteForm';
import { deleteSite, addSite } from '../actions/site.actions';

const mapStateToProps = state => ({
    sites: state.sites
});

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.onClickAddSite = this.onClickAddSite.bind(this);
    }

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
                        text: row.url,
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
                        text: 'Delete',
                        onClick: () => this.deleteSite(row.id),
                    }
                ]
            });
        });

        return data;
    }

    deleteSite(id) {
        this.props.dispatch(deleteSite(id));
    }

    onClickAddSite(formSiteUrl, formAccessKey) {
        this.props.dispatch(addSite(formSiteUrl, formAccessKey));
    }

    render() {
        const table = this.prepareSettingsTable(this.props.sites);

        return <div>
            <h1 class='h5'>Settings</h1>

            <h2 class='h6'>Sites</h2>
            <p>For each website you want to be able to debug you need to configure a <strong>site authentication key</strong>.</p>

            <TableData data={table}></TableData>
            <NewSiteForm addSite={this.onClickAddSite}></NewSiteForm>

        </div>
    }
}

export default connect(
    mapStateToProps
)(Settings);