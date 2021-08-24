//! TẠO 1 ACTIONS THỐNG NHẤT CHUNG VỚI NHAU
// gọi là action creator
export const createAction = (type, payload) => {
    return {
        type,
        payload,
    }
}