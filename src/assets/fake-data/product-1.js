//San pham 1
const product_01_image_01 = require('../images/products-2/product-01-(1).jpeg').default
const product_01_image_02 = require('../images/products-2/product-01-(2).jpeg').default
//San pham 2
const product_02_image_01 = require('../images/products-2/product-02-(1).jpeg').default
const product_02_image_02 = require('../images/products-2/product-02-(2).jpeg').default
//San pham 3
const product_03_image_01 = require('../images/products-2/product-03-(1).jpeg').default
const product_03_image_02 = require('../images/products-2/product-03-(2).jpeg').default

//San pham 4
const product_04_image_01 = require('../images/products-2/product-04-(1).jpeg').default
const product_04_image_02 = require('../images/products-2/product-04-(2).jpeg').default
//San pham 5
const product_05_image_01 = require('../images/products-2/product-05-(1).jpeg').default
const product_05_image_02 = require('../images/products-2/product-05-(2).jpeg').default
//San pham 6

const product_06_image_01 = require('../images/products-2/product-06-(1).jpeg').default
const product_06_image_02 = require('../images/products-2/product-06-(2).jpeg').default
//San pham 7
const product_07_image_01 = require('../images/products-2/product-07-(1).jpeg').default
const product_07_image_02 = require('../images/products-2/product-07-(2).jpeg').default

//San pham 8
const product_08_image_01 = require('../images/products-2/product-08-(1).jpeg').default
const product_08_image_02 = require('../images/products-2/product-08-(2).jpeg').default

//San pham 9

const product_09_image_01 = require('../images/products-2/product-09-(1).jpeg').default
const product_09_image_02 = require('../images/products-2/product-09-(2).jpeg').default

//San pham 10
const product_10_image_01 = require('../images/products-2/product-10-(1).jpeg').default
const product_10_image_02 = require('../images/products-2/product-10-(2).jpeg').default


//San pham 11

const product_11_image_01 = require('../images/products-2/product-11-(1).jpeg').default
const product_11_image_02 = require('../images/products-2/product-11-(2).jpeg').default
//San pham 12

const product_12_image_01 = require('../images/products-2/product-12-(1).jpeg').default

//San pham 13

const product_13_image_01 = require('../images/products-2/product-13-(1).jpeg').default

//San pham 14

const product_14_image_01 = require('../images/products-2/product-14-(1).jpeg').default

//San pham 15

const product_15_image_01 = require('../images/products-2/product-15-(1).jpeg').default
const product_15_image_02 = require('../images/products-2/product-15-(2).jpeg').default
//San pham 16

const product_16_image_01 = require('../images/products-2/product-16-(1).jpeg').default

//San pham 17

const product_17_image_01 = require('../images/products-2/product-17-(1).jpeg').default

//San pham 18

const product_18_image_01 = require('../images/products-2/product-18-(1).jpeg').default
const product_18_image_02 = require('../images/products-2/product-18-(2).jpeg').default
//San pham 19

const product_19_image_01 = require('../images/products-2/product-19-(1).jpeg').default
const product_19_image_02 = require('../images/products-2/product-19-(2).jpeg').default
//San pham 20

const product_20_image_01 = require('../images/products-2/product-20-(1).jpeg').default
const product_20_image_02 = require('../images/products-2/product-20-(2).jpeg').default

//San pham 21
const product_21_image_01 = require('../images/products-2/product-21-(1).jpeg').default

//San pham 22

const product_22_image_01 = require('../images/products-2/product-22-(1).jpeg').default

//San pham 23

const product_23_image_01 = require('../images/products-2/product-23-(1).jpeg').default
const product_23_image_02 = require('../images/products-2/product-23-(2).jpeg').default
//San pham 24

const product_24_image_01 = require('../images/products-2/product-24-(1).jpeg').default
const product_24_image_02 = require('../images/products-2/product-24-(2).jpeg').default

const products = [

    //cham soc suc khoe
    
    {
        title: "Bộ dụng cụ xét nghiệm nhanh Covid-19",
        price: '2950000',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "cham-soc-suc-khoe",
        brand: ["Abbott"],
        slug: "ao-thun-dinosaur-01",
       
        description: "Dụng cụ xét nghiệm nhanh Humasis COVID-19 Ag Test xuất xứ từ Hàn Quốc giúp phát hiện nhanh kháng nguyên SARS-CoV-2 trong mẫu dịch đường hô hấp trong vòng 7 ngày đầu nhiễm virus. Sản phẩm dễ sử dụng, độ chính xác cao, có kết quả chỉ sau 15 phút và đã được Bộ Y tế cấp phép theo Giấy phép số 5044/BYT-TB-CT"
    },
    {
        title: "Cồn 70 độ Pharmacity (500ml)",
        price: '23000',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "cham-soc-suc-khoe",
        brand: ["Pharmacity"],
        slug: "cham-soc-suc-khoe-con-70-do-500ml",
       
        description: "Sát trùng ngoài da và các vật dụng y tế"
    },
    {
        title: "Khẩu trang y tế 3 Pharmacity (50 cái/hộp)",
        price: '59000',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "cham-soc-suc-khoe",
        brand: ["Pharmacity"],
        slug: "cham-soc-suc-khoe-khau-trang-y-te",
       
        description: "Khẩu trang y tế 3 lớp màu trắng Pharmacity được làm từ nguyên liệu chống dị ứng chất lượng cao, có hiệu quả lọc khuẩn trên 99%, giúp phòng ngừa bụi bẩn và các bệnh lây lan qua đường hô hấp."
    },
    
    {
        title: "Khẩu trang 4D (Hộp 10 cái)",
        price: '49000',
        image01: product_04_image_01,
        image02: product_04_image_02,
        categorySlug: "cham-soc-suc-khoe",
        brand: ["Pharmacity"],
        slug: "cham-soc-suc-khoe-khau-trang-4D",
       
        description: "Khẩu trang 4D Pharmacity được làm từ chất liệu vải tự nhiên, siêu mềm mịn. Sản phẩm có thiết kế 4D thông minh, vừa vặn với khuôn mặt. Đặc biệt, khẩu trang 4D Pharmacity có tác dụng làm mát, thiết kế đa chiều, không lem son môi cho nữ giới khi sử dụng."
    },
    {
        title: "Khẩu trang than hoạt tính (50 cái/hộp)",
        price: '89000',
        image01: product_05_image_01,
        image02: product_05_image_02,
        categorySlug: "cham-soc-suc-khoe",
        brand: ["Pharmacity"],
        slug: "cham-soc-suc-khoe-khau-trang-than-hoat-tinh",
       
        description: "Khẩu trang than hoạt tính 4 lớp Pharmacity được làm từ nguyên liệu chống dị ứng chất lượng cao, có hiệu quả lọc khuẩn trên 99%, giúp phòng ngừa bụi bẩn và các bệnh lây lan qua đường hô hấp."
    },
    {
        title: "Khẩu trang y tế 3 lớp (50 cái/hộp)",
        price: '59000',
        image01: product_06_image_01,
        image02: product_06_image_02,
        categorySlug: "cham-soc-suc-khoe",
        brand: ["Pharmacity"],
        slug: "cham-soc-suc-khoe-khau-trang-y-te-3-lop",
       
        description: "Khẩu trang y tế 3 lớp màu xanh Pharmacity được làm từ nguyên liệu chống dị ứng chất lượng cao, có hiệu quả lọc khuẩn trên 99%, giúp phòng ngừa bụi bẩn và các bệnh lây lan qua đường hô hấp."
    },

    {
        title: "Khẩu trang y tế Pharmacity(Gói 10 cái)",
        price: '17000',
        image01: product_07_image_01,
        image02: product_07_image_02,
        categorySlug: "cham-soc-suc-khoe",
        brand: ["Pharmacity"],
        slug: "cham-soc-suc-khoe-khau-trang-y-te-pharmacity",
       
        description: "Khẩu trang y tế Pharmacity màu xanh dương với 3 lớp kháng khuẩn có khả năng lọc bụi, lọc khuẩn tối ưu đạt tiêu chuẩn ISO 13485:2016."
    },

    {
        title: "Kính bảo hộ cao cấp Asia Face Shield",
        price: '56000',
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: "cham-soc-suc-khoe",
        brand: ["Agi"],
        slug: "cham-soc-suc-khoe-kinh-bao-ho",
       
        description: "Kính bảo hộ cao cấp Asia Face Shield được làm từ chất liệu polycarbonate trong suốt phủ nano, với kiểu dáng cong thời trang ôm gọn toàn bộ khuôn mặt, giúp hỗ trợ chống các giọt bắn, khói bụi, đặc biệt kính chống đọng sương và hơi thở, đồng thời chống trầy xước, chống UV, tật cận thị, có thể kết hợp đeo kính có độ ở bên trong."
    },

    //cham soc ca nhan

    {
        title: "Nước muối sinh lý Natriclorid 0.9% (500ml)",
        price: '6000',
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: "cham-soc-ca-nhan",
        brand: ["Vinaphaco"],
        slug: "cham-soc-ca-nhan-nuoc-moi",
       
        description: "Nước muối sinh lý Vĩnh Phúc Natriclorid 0.9% giúp làm sạch răng, khử mùi hôi khoang miệng đồng thời làm sạch bụi bẩn bám trên da mặt, ngăn ngừa mụn trứng cá."
    },

    {
        title: "Nước muối Pharmacity 0,9% (500ml)",
        price: '16000',
        image01: product_10_image_01,
        image02: product_10_image_02,
        categorySlug: "cham-soc-ca-nhan",
        brand: ["Pharmacity"],
        slug: "cham-soc-ca-nhan-nuoc-moi-pharmacity",
       
        description: "Nước muối Pharmacity 0,9% dùng súc miệng và giúp ngăn ngừa, hỗ trợ giảm nhẹ các bệnh về mũi, họng, răng miệng, da."
    },

    {
        title: "Băng vệ sinh ban ngày (18 miếng/gói)",
        price: '56000',
        image01: product_11_image_01,
        image02: product_11_image_02,
        categorySlug: "cham-soc-ca-nhan",
        brand: ["Whisper"],
        slug: "cham-soc-ca-nhan-bang-ve-sinh",
       
        description: "Băng vệ sinh ban ngày mềm mỏng thoáng mát Whisper có cánh 24cm với lớp đệm thoáng khí kết hợp cùng hạt gel thần kỳ thấm hút gấp 40 lần trọng lượng của chính nó, giúp kiểm soát mùi hiệu quả, cho bạn cảm giác mềm mại và khô thoáng suốt ngày dài."
    },

    {
        title: "XỊT RỬA TAY HƯƠNG TRÀ XANH",
        price: '26000',
        image01: product_12_image_01,

        categorySlug: "cham-soc-ca-nhan",
        brand: ["Pharmacity"],
        slug: "cham-soc-ca-nhan-xit-rua-tay",
       
        description: "XỊT RỬA TAY HƯƠNG TRÀ XANH"
    },

    {
        title: "GEL RỬA TAY HƯƠNG HOA OẢI HƯƠNG (320ml)",
        price: '52000',
        image01: product_13_image_01,

        categorySlug: "cham-soc-ca-nhan",
        brand: ["Pharmacity"],
        slug: "cham-soc-ca-nhan-gel-rua-tay",
       
        description: "GEL RỬA TAY HƯƠNG HOA OẢI HƯƠNG"
    },

    
    {
        title: "Dầu gội sạch gàu, hết ngứa da đầu Selsun (100ml)",
        price: '89000',
        image01: product_14_image_01,

        categorySlug: "cham-soc-ca-nhan",
        brand: ["Aquafresh"],
        slug: "cham-soc-ca-nhan-dau-goi",
       
        description: "đánh bay nấm gây gàu, làm sạch vảy nấm và ngứa da đầu. Giữ cho da đầu không gàu; không ngứa và luôn khỏe mạnh. Có thể dùng cho cả tóc nhuộm và uốn."
    },
    
    {
        title: "Gạc rơ lưỡi trẻ em Pharmacity (5 cái/hộp)",
        price: '3800',
        image01: product_15_image_01,
        image02: product_15_image_02,
        categorySlug: "cham-soc-ca-nhan",
        brand: ["Pharmacity"],
        slug: "cham-soc-ca-nhan-gac-ro-luoi",
       
        description: "Gạc rơ lưỡi trẻ em Pharmacity tiệt trùng với thành phần 100% polyester, giúp loại trừ các mảng bám, vi khuẩn trên bề mặt lưỡi và trong khoang miệng, hạn chế các bệnh về răng miệng (hôi miệng, viêm nướu…)."
    },

    {
        title: "GEL RỬA TAY HƯƠNG TRÀ XANH (320ml)",
        price: '52000',
        image01: product_16_image_01,
      
        categorySlug: "cham-soc-ca-nhan",
        brand: ["Pharmacity"],
        slug: "cham-soc-ca-nhan-gel-rua-tay-huong-tra",
       
        description: ""
    },

    //Cham soc sac dep

    {
        title: "Tăm bông người lớn Pharmacity (40 cây/gói)",
        price: '3800',
        image01: product_17_image_01,
      
        categorySlug: "cham-soc-sac-dep",
        brand: ["Pharmacity"],
        slug: "cham-soc-sac-dep-tam-bong",
       
        description: "Đầu tăm được làm từ 100% cotton tự nhiên. Bông chắc và mịn, mềm mại, khả năng thấm nước cao, rất tiện lợi trong việc thấm và làm sạch các chất bẩn. Hút sạch chất ẩm bên trong tai và trên bề mặt da, cùng nhiều công dụng khác."
    },

    {
        title: "Bông tẩy trang Jomi (Túi 120 miếng)",
        price: '33800',
        image01: product_18_image_01,
        image02: product_18_image_02,
        categorySlug: "cham-soc-sac-dep",
        brand: ["Aumlmpex"],
        slug: "cham-soc-sac-dep-bong-tay-trang",
       
        description: "Bông tẩy trang Jomi được làm từ 100% cotton thiên nhiên với hai mặt mềm mịn giúp tẩy trang hiệu quả, lau sạch trang điểm, bụi bẩn trên da, làm sạch những tế bào chết. Làm thoáng lỗ chân lông, giúp da sáng mịn. Đặc biệt tiết kiệm dưỡng chất và không để lại xơ bông trên da."
    },
    

    {
        title: "Bông tẩy trang cao cấp Pharmacity (80 miếng/hộp)",
        price: '30800',
        image01: product_19_image_01,
        image02: product_19_image_02,
        categorySlug: "cham-soc-sac-dep",
        brand: ["Pharmacity"],
        slug: "cham-soc-sac-dep-bong-tay-trang-cao-cap",
       
        description: "Được làm từ 100% cotton thiên nhiên, mềm mại và mịn màng. Bông tẩy trang cao cấp Pharmacity giúp làm sạch lớp trang điểm và bụi bẩn, đem lại cho bạn làn da sạch đẹp, tẩy trang hiệu quả, tiết kiệm và không để lại xơ bông trên da. Sử dụng từ 01 đến 02 miếng cho 1 lần sử dụng, tiện lợi lại kinh tế."
    },

    {
        title: "Mặt nạ tinh chất collagen Hyaluronate (23g)",
        price: '12000',
        image01: product_20_image_01,
        image02: product_20_image_02,
        categorySlug: "cham-soc-sac-dep",
        brand: ["Pharmacity"],
        slug: "cham-soc-sac-dep-mat-na-tinh-chat",
       
        description: "Mặt nạ tinh chất collagen Hyaluronate"
    },

    {
        title: "Tăm bông tiêu chuẩn kháng khuẩn(200 que/hộp)",
        price: '23000',
        image01: product_21_image_01,

        categorySlug: "cham-soc-sac-dep",
        brand: ["Abena"],
        slug: "cham-soc-sac-dep-tam-bong-tieu-chuan",
       
        description: "Đầu bông được làm từ 100% bông xơ tự nhiên. Bông được quấn với kỹ thuật cao, làm cho bông chắc và mịn, mềm mại và khả năng thấm nước cao. Ngoài mục đích vệ sinh tai, còn tiện lợi vệ sinh những vật dụng có khe nhỏ."
    },
    {
        title: "Bông tẩy trang đa dụng Pharmacity (80 miếng/hộp)",
        price: '23000',
        image01: product_22_image_01,

        categorySlug: "cham-soc-sac-dep",
        brand: ["Pharmacity"],
        slug: "cham-soc-sac-dep-bong-tay-trang",
       
        description: "Được làm từ 100% Cotton thiên nhiên, mềm mại và mịn màng. Bông tẩy trang đa dụng Pharmacity với thiết kế độc đáo một mặt lưới, một mặt phẳng giúp bạn tẩy trang hiệu quả, tiết kiệm và không để lại xơ bông trên da. Sử dụng từ 01 đến 02 miếng cho 1 lần sử dụng, tiện lợi lại kinh tế."
    },

    {
        title: "Tăm bông kháng khuẩn Jomi (200 chiếc)",
        price: '29000',
        image01: product_23_image_01,
        image02: product_23_image_02,
        categorySlug: "cham-soc-sac-dep",
        brand: ["Aumlmpex"],
        slug: "cham-soc-sac-dep-tam-bong",
       
        description: "Tăm bông kháng khuẩn Jomi với đầu bông làm từ cotton tự nhiên 100% phủ chiết xuất Chitosan có tác dụng kháng khuẩn, thân tăm bông làm từ giấy giúp cầm chắc tay và thao tác chính xác, an toàn. Thiết kế hộp tăm bông đẹp mắt, tiện lợi, có thể sử dụng trong nhiều trường hợp như vệ sinh tai, mũi, bôi thuốc,…"
    },

    {
        title: "Mặt nạ dưỡng trắng da (35g)",
        price: '29000',
        image01: product_24_image_01,
        image02: product_24_image_02,
        categorySlug: "cham-soc-sac-dep",
        brand: ["Abbott"],
        slug: "cham-soc-sac-dep-mat-na-mpros",
       
        description: "Mặt nạ dưỡng trắng da nha đam M.pros với thành phần chứa chiết xuất nha đam giúp làm mát da tức thì, se khít lỗ chân lông hiệu quả, mang lại cho bạn một làn da tươi tắn và mịn màng."
    },




    // 24 products
]

const getAllProducts1 = () => products

const getProducts1 = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}

const getProductBySlug1 = (slug) => products.find(e => e.slug === slug)

const getCartItemsInfo1 = (cartItems) => {
    let res = []
    if (cartItems.length > 0) {
        cartItems.forEach(e => {
            let product = getProductBySlug1(e.slug)
            res.push({
                ...e,
                product: product
            })
        })
    }
    // console.log(res)
    // console.log('sorted')
    // console.log(res.sort((a, b) => a.slug > b.slug ? 1 : (a.slug < b.slug ? -1 : 0)))
    return res.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))
}

const productData1 = {
    getAllProducts1,
    getProducts1,
    getProductBySlug1,
    getCartItemsInfo1
}

export default productData1
