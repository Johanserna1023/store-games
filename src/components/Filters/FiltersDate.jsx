import { Select, SelectItem } from "@tremor/react";
import { filterDate } from "./filters";
import { useSearchParams } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

export const FiltersDate = () => {
  const location = useLocation();
  const searchParams = useSearchParams();
  const newParams = new URLSearchParams(searchParams[0]);
  const navigate = useNavigate();

  const handleChange = (value) => {
    if (!value) {
      newParams.delete("date"); // eliminar el searchParam si es vacio
    } else {
      newParams.set("date", value); // setear los nuevos parametros
    }
    navigate(`${location.pathname}?${newParams}`); //actualizar la url con los nuevos parametros
  };
  const defaultValueSelect = newParams.get("date") || "";
  return (
    <div className="ms:max-w-sm mx-auto space-y-6 w-full md:w-auto">
      <Select
        onValueChange={handleChange}
        placeholder="Release date"
        defaultValue={defaultValueSelect}
      >
        <SelectItem value="" defaultValue={""}>
          <p className="text-[#e93a3a]">clear</p>
        </SelectItem>
        {filterDate.map((filter, index) => (
          <SelectItem key={index} value={filter.filter} defaultValue={""}>
            {filter.from} - {filter.to}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};
