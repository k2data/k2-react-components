import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid/dist/styles/ag-grid.css'
import 'ag-grid/dist/styles/theme-fresh.css'
// import 'ag-grid/dist/styles/ag-theme-material.css'
import '../src/components/AgGrid/AgGrid.css'
// import PropTypes from 'prop-types'

export class DataGrid extends Component {
  constructor (props) {
    super(props)

    this.onGridReady = this.onGridReady.bind(this)
  }

  onGridReady (params) {
    console.log('hello world')
    this.api = params.api
  }

  render () {
    return (
      <div className='ag-fresh ag-cell-40' style={{
        height: '500px',
        padding: '20px',
      }}
      >
        <AgGridReact
          onGridReady={this.onGridReady}
          columnDefs={[
            {headerName: 'Make', field: 'make'},
            {headerName: 'Model', field: 'model'},
            {headerName: 'Price', field: 'price'},
          ]}
          rowData={[
            {make: 'Toyota', model: 'Celica', price: 35000},
            {make: 'Ford', model: 'Mondeo', price: 32000},
            {make: 'Porsche', model: 'Boxter', price: 72000},
          ]}

          rowHeight='40'
          headerHeight='40'

          enableSorting
          enableFilter
          enableColResize
        />
      </div>
    )
  }
}

export default DataGrid
