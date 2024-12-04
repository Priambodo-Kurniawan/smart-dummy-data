const ProductCardLoading = () => {
    return (
        <div className="animate-pulse flex items-center border-b pb-4 mb-4 md:flex-row flex-col gap-4">
            <div className="flex items-center flex-1 w-full">
                <div class="rounded-md bg-slate-200 h-32 w-32"></div>
                <div className="ml-4 flex-1 flex gap-3 flex-col">
                    <div class="h-2 bg-slate-200 rounded w-1/2"></div>
                    <div class="h-3 bg-slate-200 rounded w-2/3"></div>
                    <div class="h-2 bg-slate-200 rounded w-1/2"></div>
                    <div class="h-2 bg-slate-200 rounded w-1/5"></div>
                </div>
            </div>
            <div className="flex w-full md:w-1/3 justify-between">
                <div className="flex items-center">
                    <div class="h-2 bg-slate-200 rounded w-24"></div>
                </div>
                <div className="text-lg font-semibold ml-6 sm:w-32 text-right flex justify-end">
                    <div class="h-3 bg-slate-200 rounded sm:w-2/3"></div>
                </div>
            </div>
        </div>
    );
};

export default ProductCardLoading;
