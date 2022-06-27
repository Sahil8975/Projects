import React, { useEffect, useState, useRef } from 'react'
import Header from '../../Header/Header'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
// import axios from 'axios'
import { Toast } from 'primereact/toast'
// import { Button } from '@mui/material'


const Table = () => {
  const [post, setPost] = useState([]);
  const [search, setSearch] = useState("");
  // const [filteredCountries, setFilteredCountries] = useState([])
  const [expandedRows, setExpandedRows] = useState(null);
  const toast = useRef(null);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      const summary = expandedRows !== null ? ' Rows Expanded' : ' Rows Collapsed';
      toast.current.show({ severity: 'success', summary: `${summary}`, life: 3000 });
    }
  }, [expandedRows]);

  useEffect(() => {
    isMounted.current = true;
    fetch("https://restcountries.com/v2/all")
      .then((result) => result.json())
      .then((data) => setPost(data))
  }, [])
  // console.log(post)

  // const onRowExpand = (event) => {
  //   toast.current.show({ severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000 });
  // }

  // const onRowCollapse = (event) => {
  //   toast.current.show({ severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000 });
  // }

  function find(rows) {
    return rows.filter(
      (row) =>
        row.name.toLowerCase().indexOf(search) > -1 ||
        row.population.toString().toLowerCase().indexOf(search) > -1);
  }

  const onColReorder = (e) => {
    toast.current.show({ severity: 'sucess', summary: 'Column Shifted' });
  }

  const onRowReorder = (e) => {
    setPost(e.value);
    toast.current.show({ severity: 'sucess', summary: 'Rows Shifted', life: 3000 });
  }

  let displayImage = (rowData) => {
    return <img src={rowData.flags.svg} alt="" width="50" height="30" />
  }


  const rowExpansionTemplate = (items) => {
    console.log(post)
    return (
      <div className="subtable">
        <h5>Sub List for {items.name}</h5>
        <DataTable value={items.post}  responsiveLayout='scroll'>
        {/* <Column field="id" header="Id" sortable></Column> */}
          <Column field="nativeName" header="Native Name" sortable></Column>
          <Column field="subregion" header="Subregion" sortable></Column>
          <Column field="callingCodes" header="Code" sortable></Column>
        </DataTable>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div>
      </div>
      <Toast ref={toast} />
      <DataTable
        header= { <input type='text' placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} /> }
        expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
        // onRowExpand={onRowExpand} 
        // onRowCollapse={onRowCollapse}
        rowExpansionTemplate={rowExpansionTemplate}
        dataKey="id"
        editMode="cell"
        select
        showGridlines responsiveLayout='scroll'
        resizableColumns columnResizeMode="expand"
        value={find(post)}
        reorderableColumns onRowReorder={onRowReorder} onColReorder={onColReorder}
        paginator
        rows={10} >

        <Column rowReorder style={{ width: '3em' }} />
        <Column field='name' sortable header='Name'></Column>
        <Column expander style={{ width: '3em' }} />
        <Column field='capital' sortable header='Capital'></Column>
        <Column field='flags.svg' sortable header='Flags' body={displayImage} styleClass="id-width"></Column>
        <Column field='population' sortable header='Population'></Column>
      </DataTable>
      {/* </div> */}
    </div>
  )
}

export default Table
