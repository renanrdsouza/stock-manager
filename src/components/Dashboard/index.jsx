const Dashboard = () => {
  return (
    <>
      <h1 className="uppercase text-white text-4xl mt-6 font-thin">
        Dashboard
      </h1>

      <section className="grid grid-cols-4 text-white gap-x-3 mt-5">
        <div className="flex flex-col bg-zinc-900 rounded-sm px-6 py-2 h-32 shadow-xl">
          <h2>Diversidade de itens</h2>
          <p className="text-5xl text-center my-auto font-normal">2</p>
        </div>

        <div className="flex flex-col bg-zinc-900 rounded-sm px-6 py-2 h-32 shadow-xl">
          <h2>Inventário total</h2>
          <p className="text-5xl text-center my-auto font-normal">40</p>
        </div>

        <div className="flex flex-col bg-zinc-900 rounded-sm px-6 py-2 h-32 shadow-xl">
          <h2>Itens recentes</h2>
          <p className="text-5xl text-center my-auto font-normal">2</p>
        </div>

        <div className="flex flex-col bg-zinc-900 rounded-sm px-6 py-2 h-32 shadow-xl">
          <h2>Itens acabando</h2>
          <p className="text-5xl text-center my-auto font-normal">1</p>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-x-3 mt-4">
        <table className="text-white grow">
          <thead className="bg-zinc-900">
            <tr className="text-left">
              <th className="text-left p-3">Itens Recentes</th>
              <th className="text-left">Ações</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3">7 Wonders</td>
              <td>
                <button className="bg-slate-200 text-black px-3 py-1 rounded-md hover:bg-slate-400 transition-colors">
                  Ver
                </button>
              </td>
            </tr>

            <tr>
              <td className="p-3">O Senhor dos Anéis</td>
              <td>
                <button className="bg-slate-200 text-black px-3 py-1 rounded-md hover:bg-slate-400 transition-colors">
                  Ver
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="text-white grow">
          <thead className="bg-zinc-900">
            <tr className="text-left">
              <th className="text-left p-3">Itens Recentes</th>
              <th className="text-left">Ações</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3">7 Wonders</td>
              <td>
                <button className="bg-slate-200 text-black px-3 py-1 rounded-md hover:bg-slate-400 transition-colors">
                  Ver
                </button>
              </td>
            </tr>

            <tr>
              <td className="p-3">O Senhor dos Anéis</td>
              <td>
                <button className="bg-slate-200 text-black px-3 py-1 rounded-md hover:bg-slate-400 transition-colors">
                  Ver
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Dashboard;
