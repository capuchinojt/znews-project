'use client';

import React from 'react';
import CategoryColumnsGridBase from './CategoryColumnsGridBase';
import { useCategoryGroup } from '@/lib/hooks/useCategoryColumns';

interface CategoryColumnsGridSecondGroupProps {
  showTitle?: boolean;
  maxArticlesPerColumn?: number;
}

export default function CategoryColumnsGridSecondGroup({
  showTitle = false,
  maxArticlesPerColumn = 3,
}: CategoryColumnsGridSecondGroupProps) {
  const { groupData, loading, error } = useCategoryGroup('second-group');

  return (
    <CategoryColumnsGridBase
      groupId="second-group"
      title={showTitle ? groupData?.title : undefined}
      categories={groupData?.categories || []}
      loading={loading}
      error={error}
      maxArticlesPerColumn={maxArticlesPerColumn}
    />
  );
}
