import { Timestamp } from "firebase/firestore"
import { StaticImageData } from "next/image"
import { ReactNode } from "react"

export type SeoData = {
  metaTitle: string,
  MetaDescription: string,
  MetaKeywords: string,
  ogImage: string,
}
export type InputData = {
  label?: string,
  labelItem?: ReactNode,
  id?: string,
  type?: string,
  value?: string | number | null,
  placeholder?: string,
  readOnly?: boolean,
  name?: string,
  required?: boolean,
  note?: string,
  onChangeFunction?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export type modalPopup = {
  title: string,
  buttonText?: string,
  linkText?: string,
  content: ReactNode
}

type tableInnerColumn = {
  title: string, style: string
}
export type manageEnquiryData = {
  id?: string,
  name?: string,
  mobileNo?: string,
  message?: string,
  enQuiryDate?: Timestamp | undefined
}
export type trackFitnessData = {
  id?: string,
  date?: string
  day?: string,
  maintenanceCal?: number,
  consumedCal?: number,
  weight?: number
  createdDate?: Timestamp | undefined,
  backlogCal?:number
}
export type trackFitnessFormData = {
  day?: number | null,
  maintenanceCal?: number | null,
  consumedCal?: number | null,
  weight?: number | null,
  backlogCal?:number | null
}

export type tableData = {
  tableColumns: tableInnerColumn[],
  children?: ReactNode
}
export type iconTextCardData = {
  title: string | number | undefined,
  subTitle: string,
  icon?: StaticImageData
}
