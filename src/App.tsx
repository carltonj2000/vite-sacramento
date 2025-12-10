function App() {
  return (
    <div className="max-w-2xl mx-auto flex flex-col items-center bg-violet-50 min-h-screen">
      <div className="bg-violet-100 py-2 px-3 w-full flex flex-row justify-between">
        <h1 className="font-bold text-2xl">Sacramento Trip 12/12/25</h1>
        <img src="/Sacramento.svg" width={36} />
      </div>
      <div className="relative overflow-x-auto rounded-base border border-default mt-4">
        <table className="w-full text-md text-left rtl:text-right text-body">
          <thead className="text-md border-b rounded-base border-default">
            <tr className="bg-violet-300">
              <th scope="col" className="px-4 py-2 font-medium">
                Activity
              </th>
              <th scope="col" className="px-4 py-2 font-medium">
                Time
              </th>
              <th scope="col" className="px-4 py-2 font-medium">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-violet-200 even:bg-violet-100">
              <td className="px-4 py-3">Leave Home</td>
              <td className="px-4 py-3">
                Friday 10<sup>th</sup>
                <br />5 AM
              </td>
              <td className="px-4 py-3">Park Teresa's car at airport</td>
            </tr>
            <tr className="odd:bg-violet-200 even:bg-violet-100">
              <td className="px-4 py-3">Las To Oak</td>
              <td className="px-4 py-3">7:05 AM - 8:40 AM</td>
              <td className="px-4 py-3">
                Southwest Flight #4777
                <br />
                Confirmation B8H5KY
              </td>
            </tr>
            <tr className="odd:bg-violet-200 even:bg-violet-100">
              <td className="px-4 py-3">Oak To Las</td>
              <td className="px-4 py-3">
                Sunday, 12<sup>th</sup>
                <br />
                7:05AM - 8:40AM
              </td>
              <td className="px-4 py-3">
                Southwest Flight #3874
                <br />
                Confirmation B8H5KY
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
