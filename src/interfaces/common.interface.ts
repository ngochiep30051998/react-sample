import React from "react";

export interface IMenuItem {
  label: React.ReactNode;
  key: React.Key;
  icon?: React.ReactNode;
  to?: string;
  children?: IMenuItem[];
  component?: React.ReactNode;
  onClick?: () => void;
  permission?: string;
}

export interface IResponse<T>{
    code: string
    message: string
    requestId: string
    timestamp: string
    data: T
}

export interface IQueryPayload {
    q?: string;
    page: number;
    per_page: number;
}

export interface IAttributes {
    [key: string]: string[];
}
