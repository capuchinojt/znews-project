'use client';

import React from 'react';
import CategoryColumnsGridBase from './CategoryColumnsGridBase';
import { useCategoryGroup } from '@/lib/hooks/useCategoryColumns';

interface CategoryColumnsGridFirstGroupProps {
  showTitle?: boolean;
  maxArticlesPerColumn?: number;
}

export default function CategoryColumnsGridFirstGroup({
  showTitle = false,
  maxArticlesPerColumn = 3,
}: CategoryColumnsGridFirstGroupProps) {
  const { groupData, loading, error } = useCategoryGroup('first-group');

  return (
    <CategoryColumnsGridBase
      groupId="first-group"
      title={showTitle ? groupData?.title : undefined}
      categories={groupData?.categories || []}
      loading={loading}
      error={error}
      maxArticlesPerColumn={maxArticlesPerColumn}
    />
  );
}
