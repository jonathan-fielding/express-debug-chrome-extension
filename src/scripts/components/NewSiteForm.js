import React from 'react';

class NewSiteForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            formSiteUrl: '',
            formAccessKey: '',
        };

        this.onSiteUrlChange = this.onSiteUrlChange.bind(this);
        this.onAccessKeyChange = this.onAccessKeyChange.bind(this);
        this.onClickAddSite = this.onClickAddSite.bind(this);
    }

    onSiteUrlChange(element) {
        const siteUrl = element.target.value;
        this.setState({ formSiteUrl: siteUrl })
    }

    onAccessKeyChange(element) {
        const accessKey = element.target.value;
        this.setState({ formAccessKey: accessKey });
    }

    onClickAddSite(element) {
        this.props.addSite(this.state.formSiteUrl, this.state.formAccessKey);
        element.preventDefault();
    }

    render () {
        return <form>
            <label>Website URL (Defaults to current tab URL)</label>
            <input type="text" placeholder="Site url" onChange={this.onSiteUrlChange} />
            <label>Access Token</label>
            <input type="text" placeholder="Access Key" onChange={this.onAccessKeyChange} />
            <button type="submit" onClick={this.onClickAddSite}>Add new site</button>
        </form>
    }
};

export default NewSiteForm;