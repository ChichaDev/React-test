import { useLocation } from 'react-router-dom';

export const useQueryParams = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const page = parseInt(query.get('page') || '1', 10);
  const imageType = query.get('image_type') || 'all';

  return { page, imageType };
};
