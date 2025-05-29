import { Timestamp } from "firebase/firestore"
import { StaticImageData } from "next/image"
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
  export type trackFitnessData = {
    id?:string,
    date?:string
    wakeupTime?:string,
    stepCount?:string,
    colories?:number,
    workout?:string
  }

  export type tableData = {
    tableColumns: tableInnerColumn[],
    children?: ReactNode
  }
  export type iconTextCardData = {
    title:string,
    subTitle:string,
    icon?:StaticImageData
  }
