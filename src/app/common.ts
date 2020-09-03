export function filter(val: string, options: any): any {
    const filterValue = val ? val.toLowerCase() : '';
    return options?.filter(option => option.value.toLowerCase().includes(filterValue));
  }