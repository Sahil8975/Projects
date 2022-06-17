import React, { useEffect, useState } from 'react'
import Header from '../../Header/Header'
import {DataTable} from 'primereact/datatable'
import { Column } from 'primereact/column'
import axios from 'axios'


const Table = () => {
  const [post, setPost] =useState([]);

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=> setPost(res.data));
  })
  return (
    <div>
    <Header/>
        <DataTable
        value={post}
        responsiveLayout="scroll"
        paginatorTemplate="FristPageLink PrevPageLink PageLink NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        dataKey='id'
        paginator
        emptyMessage="No data found"
        className='datatable-responsive'
        currentPageReportTemplate='Showing {first} to {last} of {totalRecord} posts'
        rows={10} >
          <Column field='userId' sortable header='userId'></Column>
          <Column field='id' sortable header='id'></Column>
          <Column field='title' sortable header='title'></Column>
          <Column field='body' sortable header='body'></Column>
        </DataTable>
    </div>
  )
}

export default Table