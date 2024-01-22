import { useMutation, useQueryClient } from "react-query";
import { Category, Subcategory } from "../utils/types";
import { CategoryService } from "../services";

interface ApiError {
  message: string;
}

const useCreateSubcategory = () => {
    const queryClient = useQueryClient();
    return useMutation((data:  { categoryId: string; subcategory: Subcategory }) =>
     CategoryService.createSubcategory(data.categoryId, data.subcategory), {
        onSuccess: () => {
            queryClient.invalidateQueries('categories/{categoryId}/subcategories');
        },
    });
 };

export default useCreateSubcategory;

