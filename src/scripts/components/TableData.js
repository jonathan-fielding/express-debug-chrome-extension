import React from 'react'

class TableData extends React.Component {
    render() {
        const tableHeading = this.props.data.slice(0, 1);
        const tableData = this.props.data.slice(1);

        return <div>
            <table class="unstriped">
                <thead>{this.createTableContent(tableHeading)}</thead>
                <tbody>{this.createTableContent(tableData)}</tbody>
            </table>
        </div>
    }
    
    createTableContent(tableData) {
        return tableData.map((row, index)=> {
            const columns = row.cols.map((col) => {
                switch (col.type) {
                    case 'heading':
                        return <th>{col.text}</th>;
                    case 'action': 
                        return <td><button className='button tiny'>{col.text}</button></td>;
                    case 'input': 
                        return <td><input name={col.name} placeholder={col.placeholder} /></td>;
                    default:
                        return <td>{col.text}</td>;
                }
                
            })

            return <tr className={row.className}>{columns}</tr>;
        });
    }
}
export default TableData
