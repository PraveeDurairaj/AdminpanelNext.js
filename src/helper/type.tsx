import { Timestamp } from "firebase/firestore"
import { ReactNode } from "react"

export type SeoData = {
    metaTitle:string,
    MetaDescription:string,
    MetaKeywords:string,
    ogImage:string,
}
export type InputData = {
    label?: string,
    labelItem?:ReactNode,
    id?: string,
    type?: string,
    value?: string,
    placeholder?: string,
    readOnly?:boolean,
    name?:string,
    onChangeFunction?:(e:React.ChangeEvent<HTMLInputElement>)=>void,
  }

  export type modalPopup ={
    title:string,
    buttonText?:string,
    linkText?:string,
    content:ReactNode
  }

  type tableInnerColumn = {
    title:string,style:string
  }
  export type manageEnquiryData = {
    id?:string,
    name?:string,
    mobileNo?:string,
    message?:string,
    enQuiryDate?:Timestamp | undefined
  }

  export type tableData = {
    tableColumns: tableInnerColumn[],
    children?: ReactNode
  }