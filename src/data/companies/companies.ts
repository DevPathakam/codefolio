import { Company } from '@/types/portfolio';
import { CompanyRoles } from './companyRoles';

export const Companies: Company[] = [
  {
    name: 'RedSoft Solutions Pvt. Ltd.',
    alias: 'redsoft',
    roles: CompanyRoles.RedSoft,
    location: 'Surat',
    workFrom: { month: 'Feb', year: 2017 },
    workTo: { month: 'Apr', year: 2018 },
    isCurrent: false,
    jobType: 'Full-Time',
    workMode: 'In-Office',
  },
  {
    name: 'WebOsmotic',
    alias: 'wo',
    roles: CompanyRoles.WO,
    location: 'Surat',
    workFrom: { month: 'May', year: 2018 },
    workTo: { month: 'Jul', year: 2020 },
    isCurrent: false,
    jobType: 'Full-Time',
    workMode: 'In-Office',
  },
  {
    name: 'Shukul Infotech Pvt. Ltd.',
    alias: 'shukul',
    roles: CompanyRoles.Shukul,
    location: 'Surat',
    workFrom: { month: 'Aug', year: 2020 },
    workTo: { month: 'Dec', year: 2020 },
    isCurrent: false,
    jobType: 'Full-Time',
    workMode: 'In-Office',
  },
  {
    name: 'LogicalWings Infoweb Pvt. Ltd.',
    alias: 'lw',
    roles: CompanyRoles.LW,
    location: 'Vadodara',
    workFrom: { month: 'Feb', year: 2021 },
    isCurrent: true,
    jobType: 'Full-Time',
    workMode: 'Remote',
  },
];
