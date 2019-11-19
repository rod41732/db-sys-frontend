export interface Branch {
    BranchID: number
    BranchName: string
    OpenDate: Date
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
    BirthDate: Date
    HomeAddress: string
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
    TransDate: Date
    Amount: number
    BranchID: number
    CardID: number
}

export interface MemberCard {
    CardID: number
}

export interface Product {
    ProID: number
    Name: string
    DefaultPrice: number
    Type: string
}

export interface ProductLine {
    BranchID: number
    TransID: number
    NumBuy: number
    Price: number
}