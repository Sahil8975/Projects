import React, { useEffect, useState, useRef } from 'react'
import Header from '../../Header/Header'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import axios from 'axios'
import {Toast} from 'primereact/toast'


const Table = () => {
  const [post, setPost] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([])
  const toast = useRef(null);

  useEffect(()=>{
    fetch("https://restcountries.com/v2/all")
    .then((response)=>response.json())
    .then((json)=>setPost(json))
  },[])
  console.log(post)

  function find(rows){
    return rows.filter(
      (rows)=>
    rows.name.toLowerCase().indexOf(search)>-1 ||
    rows.capital.toLowerCase().indexOf(search)>-1);
  }

  const onColReorder = (e) => {
    toast.current.show({ severity: 'sucess', summary: 'Column Shifted' });
  }

  const onRowReorder = (e) => {
    setPost(e.value);
    toast.current.show({ severity: 'sucess', summary: 'Rows Shifted', life: 3000 });
 }

  let displayImage = (rowData)=>{
    return  <img src={rowData.flags.svg} alt="" width="50" height="30"/>
  }
  return (
    <div>
      <Header />
    <div>
    </div>
      <Toast ref={toast} />
      <DataTable
        header=
        {
          <input  type='text' placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} />
        }

        editMode="cell"

        showGridlines responsiveLayout='scroll'
        // globalFilter={filteredCountries}
        // data={filteredCountries}
        resizableColumns columnResizeMode="expand"
        value={find(post)}
        reorderableColumns onRowReorder={onRowReorder} onColReorder={onColReorder}
        paginator
        rows={10} >
        
        <Column rowReorder style={{ width: '3em' }} />
        <Column field='name' sortable header='Name'></Column>
        <Column field='capital' sortable header='Capital'></Column>
        <Column field='flags.svg' sortable header='Flags' body={displayImage} styleClass="id-width"></Column>
        <Column field='population' sortable header='Population'></Column>
      </DataTable>
      {/* </div> */}
    </div>
  )
}

export default Table