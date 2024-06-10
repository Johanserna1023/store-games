import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { ordering } from "./filters";
import { Select, SelectItem } from "@tremor/react";
export const FiltersOrdering = () => {
  const location = useLocation();
  const searchParams = useSearchParams();
  const newParams = new URLSearchParams(searchParams[0]);
  const navigate = useNavigate();

  const handleChange = (value) => {
    if (!value) {
      newParams.delete("ordering"); // eliminar el searchParam si es vacio
    } else {
      newParams.set("ordering", value); // setear los nuevos parametros
    }
    navigate(`${location.pathname}?${newParams}`); //actualizar la url con los nuevos parametros
  };
  const defaultValueSelect = newParams.get("ordering") || "";
  return (
    <div className="sm:max-w-sm mx-auto space-y-6 w-full md:w-auto">
      <Select
        onValueChange={handleChange}
        placeholder="Ordering by popularity"
        defaultValue={defaultValueSelect}
      >
        <SelectItem value="" defaultValue={""}>
          <p className="text-[#e93a3a]">clear</p>
        </SelectItem>
        {ordering.map((order, index) => (
          <SelectItem key={index} value={order.value} defaultValue={""}>
            {order.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};
