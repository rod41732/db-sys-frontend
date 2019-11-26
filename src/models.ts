export interface Branch {
    BranchID: number
    BranchName: string
    OpenDate: Date | string // depend whether it's output or input
    DailyHours: string
    Email: string
    PhoneNo: string
    StreetNo: string
    SubDistrict: string
    District: string
    Province: string
    ZipCode: string
}

export interface Employee {
    EmpID: number
    BranchID: number
    FirstName: string
    LastName: string
    Age: number
    BirthDate: Date | string // depend whether it's output or input
    StreetNo: string
    SubDistrict: string
    District: string
    Province: string
    ZipCode: string
    HomeAddress?: string ///
    HasLeft: boolean
    Email: string
    Image: string
    PhoneNo: string
    IsFulltime: boolean
    IsPartTime: boolean
    IsManager: boolean
    Username: string
    Password: string
}


export interface Transaction {
    TransID: number
    TransDate: Date | string // depend whether it's output or input
    Amount: number
    BranchID: number
    CardID: number
}

export interface MemberCard {
    CardID: number
}

export interface Product {
    ProdID: number
    ProdName: string
    DefaultPrice?: number
    AmountInStock?: number
    Image?: string
    ProdType?: string
}

// product, plus file upload
export interface ProductFormData {
    product: Product
    file: File,
}

export interface ProductLine {
    ProdID: number
    TransID: number
    NumBuy: number
    Price: number
}
export interface BranchFilter {
    BranchID?: number
    FromDate?: Date | string // depend whether it's output or input
    ToDate?: Date | string // depend whether it's output or input
}

export interface ResponseStatus {
    message: string;
}