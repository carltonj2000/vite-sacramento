function App() {
  return (
    <div className="max-w-2xl mx-auto flex flex-col items-center bg-violet-50 min-h-screen">
      <div className="bg-violet-100 py-2 px-3 w-full flex flex-row justify-between">
        <h1 className="font-bold text-2xl">Sacramento Trip 12/12/25</h1>
        <img src="/Sacramento.svg" width={36} />
      </div>
      <table className="text-md text-left mt-4">
        <thead className="text-md border-b">
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
              Friday 12<sup>th</sup>
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
            <td className="px-4 py-3">Car Rental</td>
            <td className="px-4 py-3">10 AM</td>
            <td className="px-4 py-3">
              Budget, Oakland CA
              <br />
              Confirmation #36257926US5
            </td>
          </tr>
          <tr className="odd:bg-violet-200 even:bg-violet-100">
            <td className="px-4 py-3">Kitchen Story</td>
            <td className="px-4 py-3">11 AM</td>
            <td className="px-4 py-3">
              <a
                href="https://share.google/DBfvVlFFEpWjODh2l"
                className="underline"
              >
                5422 College Ave
                <br />
                Oakland Ca
              </a>
            </td>
          </tr>
          <tr className="odd:bg-violet-200 even:bg-violet-100">
            <td className="px-4 py-3">Oakland Sites</td>
            <td className="px-4 py-3">12 PM - 2 PM</td>
            <td className="px-4 py-3">
              <a
                href="https://maps.app.goo.gl/537hCsM6AajfPjgZ7"
                className="underline"
              >
                Enssaro Ethiopian Tea And Restaurant
              </a>
              <hr className="my-2 border-gray-200" />
              <a
                href="https://share.google/vyydr9neGvOSmQAE7"
                className="underline"
              >
                The Cathedral of Christ the Light
                <br />
                Mass at Noon, 11 AM - 2:30 PM
              </a>
              <hr className="my-2 border-gray-200" />
              <a
                href="https://maps.app.goo.gl/oA2jmyQaXVoBK2ow6"
                className="underline"
              >
                Bonsai Garden
                <br />
                11 AM - 2:30 PM
              </a>
            </td>
          </tr>
          <tr className="odd:bg-violet-200 even:bg-violet-100">
            <td className="px-4 py-3">Hotel</td>
            <td className="px-4 py-3">4 PM</td>
            <td className="px-4 py-3">
              The Citizen Hotel
              <br />
              Confirmation #89022358
              <br />
              <a
                href="https://maps.app.goo.gl/RECbqAC3wZ9MAajv6"
                className="underline"
              >
                926 J Street, Sacramento, CA
              </a>
            </td>
          </tr>
          <tr className="odd:bg-violet-200 even:bg-violet-100">
            <td className="px-4 py-3">
              <a href="/welcomeDinner.jpg" className="underline">
                Welcome Dinner
              </a>
            </td>
            <td className="px-4 py-3">5 PM</td>
            <td className="px-4 py-3">
              <a
                href="https://maps.app.goo.gl/4ARNEaX95T4mpgsW7"
                className="underline"
              >
                1131 El Sur Way
                <br />
                Sacramento, CA 95864
              </a>
            </td>
          </tr>
          <tr className="odd:bg-violet-200 even:bg-violet-100">
            <td className="px-4 py-3">
              <a href="/christmas.webp" className="underline">
                Crawdads on the River
              </a>
            </td>
            <td className="px-4 py-3">
              Saturday 13<sup>th</sup>
              <br />
              6:30 PM
            </td>
            <td className="px-4 py-3">
              <a
                href="https://maps.app.goo.gl/PwzPpSbcPUmRvPgC8"
                className="underline"
              >
                1375 Garden Hwy
                <br />
                Sacramento, CA 95833
              </a>
            </td>
          </tr>
          <tr className="odd:bg-violet-200 even:bg-violet-100">
            <td className="px-4 py-3">Oak To Las</td>
            <td className="px-4 py-3">
              Sunday, 14<sup>th</sup>
              <br />9 PM - 10:30 PM
            </td>
            <td className="px-4 py-3">
              Southwest Flight #3874
              <br />
              Confirmation B8H5KY
              <br />
              <a
                href="https://maps.app.goo.gl/C8BgovUfpaPKTHpx6"
                className="underline"
              >
                Oakland Airport
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
