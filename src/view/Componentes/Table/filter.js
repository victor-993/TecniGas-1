import Row from "./TableRow";
import TableCell from "@material-ui/core/TableCell";
import ModalDelete from "../Modal/ModalDelete/Index";

const Opciones = (objeto, categoria, recarga, setRecarga) => {
  let titulo;
  if (categoria === "cli") {
    titulo = `Cliente: ${objeto.nombre_pe}`;
  } else if (categoria === "prov") {
    titulo = `Proveedor: ${objeto.nombre_pe}`;
  } else {
    titulo = `Producto: ${objeto.nombre_pro}`;
  }
  return (
    <>
      {!categoria ? (
        <button
          onClick={() => {
            console.log(objeto);
          }}
        >
          Modificar
        </button>
      ) : (
        <Modificar
          objeto={objeto}
          tipo={categoria}
          titulo={titulo}
          metodo="put"
          imagen={categoria}
          recarga={recarga}
          setRecarga={setRecarga}
        />
      )}

      <button
        onClick={() => {
          console.log(objeto);
        }}
      >
        borrar
      </button>
    </>
  );
};

const filter = (
  tipo,
  data,
  filtro,
  titulosDetalle,
  categoria,
  recarga,
  setRecarga
) => {
  let arreglo = [];

  switch (tipo) {
    case "inv":
      if (filtro !== "") {
        arreglo = data.filter((dat) => {
          return (
            dat.nombre_catg
              .toLowerCase()
              .trim()
              .includes(filtro.toString().toLowerCase().trim()) ||
            dat.nombre_pro
              .toLowerCase()
              .trim()
              .includes(filtro.toString().toLowerCase().trim()) ||
            dat.codigo_pro
              .toString()
              .toLowerCase()
              .trim()
              .includes(filtro.toString().toLowerCase().trim())
          );
        });

        return arreglo.map((row, index) => {
          const firstData = [
            row.codigo_pro,
            row.nombre_pro,
            row.cantidad_pro,
            row.nombre_catg,
          ];
          const secondData = [
            `$ ${row.precio_uni}`,
            `$ ${row.precio_may}`,
            row.stock_min,
          ];

          return (
            <Row
              key={index}
              firstData={firstData}
              secondData={secondData}
              titulosDetalles={titulosDetalle}
              opciones={Opciones(row, recarga, setRecarga)}
            />
          );
        });
      } else {
        return data.map((row, index) => {
          const firstData = [
            row.codigo_pro,
            row.nombre_pro,
            row.cantidad_pro,
            row.nombre_catg,
          ];
          const secondData = [
            `$ ${row.precio_uni}`,
            `$ ${row.precio_may}`,
            row.stock_min,
          ];

          return (
            <Row
              key={index}
              titulosDetalles={titulosDetalle}
              firstData={firstData}
              secondData={secondData}
              opciones={Opciones(row, recarga, setRecarga)}
            />
          );
        });
      }

    case "clipro":
      if (filtro !== "") {
        arreglo = data.filter((dat) => {
          return (
            dat.nombre_pe
              .toLowerCase()
              .trim()
              .includes(filtro.toString().toLowerCase().trim()) ||
            dat.identificacion
              .toString()
              .toLowerCase()
              .trim()
              .includes(filtro.toString().toLowerCase().trim())
          );
        });

        return arreglo.map((row, index) => {
          const firstData = [row.nombre_pe, row.identificacion, row.telefono];
          const secondData = [row.email, row.direccion];

          return (
            <Row
              key={index}
              firstData={firstData}
              secondData={secondData}
              titulosDetalles={titulosDetalle}
              opciones={Opciones(row, categoria, recarga, setRecarga)}
            />
          );
        });
      } else {
        return data.map((row, index) => {
          const firstData = [row.nombre_pe, row.identificacion, row.telefono];
          const secondData = [row.email, row.direccion];

          return (
            <Row
              key={index}
              titulosDetalles={titulosDetalle}
              firstData={firstData}
              secondData={secondData}
              opciones={Opciones(row, categoria, recarga, setRecarga)}
            />
          );
        });
      }
  }
};

const mapTitle = (titulo, index) => {
  if (index === 0) {
    return (
      <TableCell key={index} align="center">
        {titulo}
      </TableCell>
    );
  } else if (index === 1) {
    return (
      <TableCell size="small" align="center" key={index}>
        {titulo}
      </TableCell>
    );
  } else {
    return (
      <TableCell key={index} align="center">
        {titulo}
      </TableCell>
    );
  }
};

export { filter, mapTitle };
