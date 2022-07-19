import { THAY_DOI_SO_LUONG, TINH_TONG_TIEN } from "./constant/constant";

const initialState = {
    menu: [
        {
            "maSP": 1,
            "soLuong": 0,
            "tenSP": "Salad",
            "giaBan": "10"
        },
        {
            "maSP": 2,
            "soLuong": 0,
            "tenSP": "Cheese",
            "giaBan": "10"
        },
        {
            "maSP": 3,
            "soLuong": 0,
            "tenSP": "Beef",
            "giaBan": "10"
        }
    ],
    total: 0
};

export const sanPhamReducer = (state = initialState, { type, payload, giaTri }) => {

    switch (type) {
        case THAY_DOI_SO_LUONG: {
            let menuCopy = [...state.menu];

            let index = state.menu.findIndex((item) => {
                return item.maSP == payload;
            })

            console.log(index);

            if (menuCopy[index].soLuong >= 0) {
                menuCopy[index].soLuong = menuCopy[index].soLuong + giaTri;

                if (menuCopy[index].soLuong < 0) {
                    menuCopy[index].soLuong = 0;
                }
                state.menu = menuCopy;
            }

            state.menu = menuCopy;

            let tongTien = state.menu.reduce((tong, sp) => {
                return (tong += sp.soLuong * sp.giaBan);
            },0);

            state.total = tongTien;
            return {...state};
        }

        default:
            return { ...state };
    }
}