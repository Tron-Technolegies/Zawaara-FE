import { useEffect } from "react";


const SizeGuide = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
  return (
    <section className="bg-[#1C1917] text-white min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl text-white font-bold text-gray-900">
            Size Guide
          </h1>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Find your perfect fit using our size charts and measurement
            guide. If you're between sizes, we recommend choosing the
            larger size for a more comfortable fit.
          </p>
        </div>

        {/* Men's Size Chart */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            Men's Size Chart
          </h2>

          <div className="overflow-x-auto bg-[#151110] rounded-2xl border border-gray-200">
            <table className="w-full">
              <thead className="bg-black text-white">
                <tr>
                  <th className="p-4 text-left">Size</th>
                  <th className="p-4 text-left">Chest (in)</th>
                  <th className="p-4 text-left">Waist (in)</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b">
                  <td className="p-4">S</td>
                  <td className="p-4">36 - 37</td>
                  <td className="p-4">30 - 31</td>
                </tr>

                <tr className="border-b">
                  <td className="p-4">M</td>
                  <td className="p-4">38 - 39</td>
                  <td className="p-4">32 - 33</td>
                </tr>

                <tr className="border-b">
                  <td className="p-4">L</td>
                  <td className="p-4">40 - 41</td>
                  <td className="p-4">34 - 35</td>
                </tr>

                <tr className="border-b">
                  <td className="p-4">XL</td>
                  <td className="p-4">42 - 44</td>
                  <td className="p-4">36 - 38</td>
                </tr>

                <tr>
                  <td className="p-4">XXL</td>
                  <td className="p-4">45 - 47</td>
                  <td className="p-4">39 - 41</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Women's Size Chart */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            Women's Size Chart
          </h2>

          <div className="overflow-x-auto bg-[#151110] rounded-2xl border border-gray-200">
            <table className="w-full">
              <thead className="bg-black text-white">
                <tr>
                  <th className="p-4 text-left">Size</th>
                  <th className="p-4 text-left">Bust (in)</th>
                  <th className="p-4 text-left">Waist (in)</th>
                  <th className="p-4 text-left">Hips (in)</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b">
                  <td className="p-4">XS</td>
                  <td className="p-4">31 - 32</td>
                  <td className="p-4">24 - 25</td>
                  <td className="p-4">33 - 34</td>
                </tr>

                <tr className="border-b">
                  <td className="p-4">S</td>
                  <td className="p-4">33 - 34</td>
                  <td className="p-4">26 - 27</td>
                  <td className="p-4">35 - 36</td>
                </tr>

                <tr className="border-b">
                  <td className="p-4">M</td>
                  <td className="p-4">35 - 36</td>
                  <td className="p-4">28 - 29</td>
                  <td className="p-4">37 - 38</td>
                </tr>

                <tr className="border-b">
                  <td className="p-4">L</td>
                  <td className="p-4">37 - 39</td>
                  <td className="p-4">30 - 32</td>
                  <td className="p-4">39 - 41</td>
                </tr>

                <tr>
                  <td className="p-4">XL</td>
                  <td className="p-4">40 - 42</td>
                  <td className="p-4">33 - 35</td>
                  <td className="p-4">42 - 44</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* How To Measure */}
        <div className="bg-[#151110] text-white rounded-3xl p-8">
          <h2 className="text-2xl font-semibold mb-6">
            How To Measure
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Chest / Bust
              </h3>

              <p className="text-gray-600">
                Measure around the fullest part of your chest or bust,
                keeping the tape comfortably level.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Waist
              </h3>

              <p className="text-gray-600">
                Measure around your natural waistline, just above the
                belly button.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Hips
              </h3>

              <p className="text-gray-600">
                Measure around the fullest part of your hips while
                standing naturally.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Shoulder
              </h3>

              <p className="text-gray-600">
                Measure from one shoulder edge to the other across your
                upper back.
              </p>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-12 text-center bg-[#151110] text-white rounded-3xl p-8">
          <h2 className="text-2xl font-semibold mb-3">
            Need Help Choosing a Size?
          </h2>

          <p className="text-gray-300">
            Contact our support team and we'll help you find the
            perfect fit.
          </p>

          <div className="mt-4 space-y-1">
            <p>support@zawara.com</p>
            <p>+91 XXXXX XXXXX</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SizeGuide;