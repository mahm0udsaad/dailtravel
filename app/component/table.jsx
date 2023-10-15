import React from 'react';

const TableRow = ({ title, prices, hotels }) => {
  return (
    <tr>
      {prices.map((price, i) => (
        <td key={i} className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{`$${price}`}</div>
        </td>
      ))}
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{hotels}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          {title}
        </span>
      </td>
    </tr>
  );
};

const Table = ({ data }) => {
  return (
    <table className="w-5/6 mx-auto border-gray-400">
      <thead>
        <tr>
          <th className="w-1/6">7 افراد</th>
          <th className="w-1/6">6 افراد</th>
          <th className="w-1/6">5 افراد</th>
          <th className="w-1/6">4 افراد</th>
          <th className="w-1/6">3 افراد</th>
          <th className="w-1/6">فردين</th>
          <th className="w-1/6">فرد</th>
          <th className="w-1/2">الفنادق</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <TableRow
            key={index}
            title={item.offer}
            prices={item.prices}
            hotels={item.hotels}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
