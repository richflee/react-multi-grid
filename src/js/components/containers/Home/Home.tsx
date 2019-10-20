import * as React from 'react';
import { MultiGrid, AutoSizer } from 'react-virtualized'
import styled from 'styled-components';


/*const StyledTable = styled.div`
    background: #1E1C1C;
    display: flex;
    flex-direction: column;
`;

const StyledTableRow = styled.div`
    &:nth-child(even) {
        background: #545454;
    }

    &:hover {
        color: orange;
    }

    &.tableHeaderRow {
        font-weight: bold;
    }

    color: rgba(207, 209, 210, 1);
    cursor: pointer;
    display: flex;
    flex-direction: row;
    font-size: 13px;
    padding: 0;
`;

const StyledTableRowCell = styled.div`
    border-right: 1px solid #545454;;
    padding: 0.6em 1em;
    flex: 1;
    text-align: right;
`;

interface DataRow {
    bidDataSource: string;  
    numBidOrders: number;  
    bidVol: number;  
    bid: number;  
    ask: number;  
    askVol: number;  
    numAskOrders: number;  
    askDataSource: string;  
}

interface TableRowProps {
    dataRow: DataRow;
}

const TableRow = (props: TableRowProps) => {
    return (
      <StyledTableRow className="tableRow">
        <StyledTableRowCell className="tableRowCell">{props.dataRow.bidDataSource}</StyledTableRowCell>
        <StyledTableRowCell className="tableRowCell">{props.dataRow.numBidOrders}</StyledTableRowCell>
        <StyledTableRowCell className="tableRowCell">{props.dataRow.bidVol}</StyledTableRowCell>
        <StyledTableRowCell className="tableRowCell">{props.dataRow.bid}</StyledTableRowCell>
        <StyledTableRowCell className="tableRowCell">{props.dataRow.ask}</StyledTableRowCell>
        <StyledTableRowCell className="tableRowCell">{props.dataRow.askVol}</StyledTableRowCell>
        <StyledTableRowCell className="tableRowCell">{props.dataRow.numAskOrders}</StyledTableRowCell>
        <StyledTableRowCell className="tableRowCell">{props.dataRow.askDataSource}</StyledTableRowCell>
      </StyledTableRow>
    );
}

interface TableProps {
    dataRows: DataRow[];
}

const Table = (props: TableProps) => {
    return (
        <StyledTable>
            {props.dataRows.map(dr => <TableRow dataRow={dr} />)}
        </StyledTable>
    );
}*/


interface HomeComponentState {
    revealExplanatoryInfo: boolean
}

export default class Home extends React.Component<any, HomeComponentState> {
    constructor(props: any) {
        super(props);

        this.state = {
            revealExplanatoryInfo: false
        } as HomeComponentState;

        this._onToggleTextDisplay = this._onToggleTextDisplay.bind(this);
    }

    _onToggleTextDisplay() {
        const reveal = !this.state.revealExplanatoryInfo;
        this.setState({
            revealExplanatoryInfo: reveal
        });
    }

    _renderExplanatoryText() {
        if (this.state.revealExplanatoryInfo) {
            return <p>Welcome to my cool React boilerplate. As you can see I'm trying to jam as many useful tools into it, such as: Styled Components, Jest, Typescript and more.</p>;
        }
        return;
    } 

    _cellRenderer({columnIndex, key, rowIndex, style}) {

        const multiGridStyles = {
            "display": "flex",
            "align-items": "center",
            "justify-content": "center",
            "border-bottom": "1px solid #eee",
            "border-right": "1px solid #eee"
        };

        return (
          <div className={"multiGridStyles"} key={key} style={style}>
            {columnIndex}, {rowIndex}
          </div>
        );
    }

    render() {

        // const dr: DataRow = {
        //     bidDataSource: 'TM',
        //     numBidOrders: 22,
        //     bidVol: 6194,
        //     bid: 2718,
        //     ask: 2717,
        //     askVol: 1149,
        //     numAskOrders: 22,
        //     askDataSource: 'TM'
        // };

        // const dataRows = [];
        // for (let index = 0; index < 5; index++) {
        //     dataRows.push(dr);
        // }

        const multiGridProps = {
            width: 800,
            cellRenderer: this._cellRenderer.bind(this)
        }


        return (
            <div className="grid-test">
                <AutoSizer disableHeight>
                    {({width}) => (
                    <MultiGrid
                        cellRenderer={multiGridProps.cellRenderer}
                        columnWidth={75}
                        columnCount={50}
                        fixedColumnCount={2}
                        fixedRowCount={1}
                        height={300}
                        rowHeight={40}
                        rowCount={100}
                        width={multiGridProps.width}
                    />
                    )}
                </AutoSizer>
            </div>
        );
    }
}